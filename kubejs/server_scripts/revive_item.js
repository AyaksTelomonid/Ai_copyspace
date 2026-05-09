// --- ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ---
function showReviveMenu(player, server, factionTag) {
    var allPlayers = server.players;
    var deadTeammates = [];
    
    for (var i = 0; i < allPlayers.length; i++) {
        var p = allPlayers[i];
        if (p.persistentData.isDead == true && p.persistentData.faction == factionTag) {
            deadTeammates.push(p);
        }
    }

    if (deadTeammates.length == 0) {
        player.tell("§cВ Пустоте нет душ вашей фракции.");
        return;
    }

    player.tell("§5§l[ РИТУАЛ ЗАПУЩЕН ]");
    for (var j = 0; j < deadTeammates.length; j++) {
        var target = deadTeammates[j];
        player.tell(
            Text.lightPurple("[ ВЕРНУТЬ " + target.name.string + " ]")
                .click("/revive_player " + target.name.string)
        );
    }
}

// --- 🔮 МАГИ (witch) ---
BlockEvents.rightClicked('irons_spellbooks:pedestal', function(event) {
    var player = event.player;
    var level = event.level;
    var block = event.block;
    var item = event.item;
    var server = event.server;

    if (player.persistentData.faction !== 'witch' || item.id !== 'kubejs:soul_anchor') return;

    var candles = 0;
    for (var x = -2; x <= 2; x++) {
        for (var z = -2; z <= 2; z++) {
            if (level.getBlock(block.x + x, block.y, block.z + z).hasTag('minecraft:candles')) {
                candles++;
            }
        }
    }

    if (candles < 8) {
        player.tell("§cСлишком мало света... Нужно 8 свечей.");
        return;
    }

    // Максимально простой поиск жителя
    var victim = null;
    var entities = level.getEntities();
    for (var k = 0; k < entities.length; k++) {
        var e = entities[k];
        if (e.type == 'minecraft:villager') {
            if (e.distanceToEntity(player) < 6) {
                victim = e;
                break;
            }
        }
    }
    
    if (victim == null) {
        player.tell("§cЖитель не найден в радиусе 6 блоков.");
        return;
    }

    victim.discard();
    server.runCommandSilent("execute at " + player.uuid + " run playsound minecraft:entity.evoker.prepare_summon ambient @a ~ ~ ~ 1 0.5");
    showReviveMenu(player, server, 'witch');
    event.cancel();
});

// --- ⚙️ ТЕХНИКИ (engineer) ---
BlockEvents.rightClicked('minecraft:copper_trapdoor', function(event) {
    var player = event.player;
    var level = event.level;
    var block = event.block;
    var item = event.item;
    var server = event.server;

    if (player.persistentData.faction !== 'engineer' || item.id !== 'kubejs:reanimation_module') return;

    var ironBase = true;
    for (var x = -1; x <= 1; x++) {
        for (var z = -1; z <= 1; z++) {
            if (level.getBlock(block.x + x, block.y - 1, block.z + z).id !== 'minecraft:iron_block') {
                ironBase = false;
            }
        }
    }

    var cauldron = level.getBlock(block.x, block.y - 2, block.z);
    if (!ironBase || !cauldron.id.contains('cauldron')) {
        player.tell("§cСистема не герметична. Платформа 3x3 и котел снизу обязательны.");
        return;
    }

    server.runCommandSilent("execute at " + player.uuid + " run playsound minecraft:block.conduit.activate ambient @a ~ ~ ~ 1 1.5");
    showReviveMenu(player, server, 'engineer');
    event.cancel();
});

// --- 👾 УЛЕЙ (sculk) ---
EntityEvents.death(function(event) {
    var source = event.source;
    var level = event.level;
    var server = event.server;
    
    if (!source || !source.actual || !source.actual.isPlayer()) return;
    
    var player = source.actual;
    if (player.persistentData.faction === 'sculk' && player.mainHandItem.id == 'kubejs:sculk_heart') {
        var catalyst = level.findBlock(player.blockPosition(), 3, function(b) { 
            return b.id == 'minecraft:sculk_catalyst'; 
        });
        
        if (catalyst) {
            server.runCommandSilent("execute at " + player.uuid + " run playsound minecraft:entity.warden.emerge ambient @a ~ ~ ~ 1 0.7");
            showReviveMenu(player, server, 'sculk');
        }
    }
});
