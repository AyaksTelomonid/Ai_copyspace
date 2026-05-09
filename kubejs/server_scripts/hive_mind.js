// При инициализации сервера создаем команду, если её нет
ServerEvents.lowPriority(function(event) {
    var server = event.server;
    server.runCommandSilent('team add sculk_team "Sculk Hive"');
    server.runCommandSilent('team modify sculk_team friendlyFire false');
    server.runCommandSilent('team modify sculk_team collisionRule never');
});

// Добавляем скалковых мобов в команду при их появлении
EntityEvents.spawned(function(event) {
    var entity = event.entity;
    
    // Список мобов, которые должны быть нейтральны к Улью
    // Можно добавить мобов из Deeper and Darker по их ID
    var sculkMobs = [
        'minecraft:warden',
        'deeperdarker:sculk_snapper',
        'deeperdarker:shriek_worm',
        'deeperdarker:stalker'
    ];

    if (sculkMobs.indexOf(entity.type) !== -1) {
        event.server.runCommandSilent('team join sculk_team ' + entity.uuid);
    }
});
// Проверка при каждом заходе или смене фракции
PlayerEvents.loggedIn(function(event) {
    var player = event.player;
    if (player.persistentData.faction == 'sculk') {
        event.server.runCommandSilent('team join sculk_team ' + player.username);
    } else {
        // Если игрок не в Улье, выгоняем его из команды (на случай смены фракции)
        event.server.runCommandSilent('team leave ' + player.username);
    }
});
EntityEvents.checkSpawn(function(event) {
    // Если Варден пытается выбрать целью игрока Улья — отменяем
    if (event.entity.type == 'minecraft:warden') {
        // В 1.21.1 это лучше делать через изменение цели атаки
        // Но базовой команды Team обычно достаточно.
    }
});

// Если игрок Улья ударил Вардена — Варден все равно может ответить.
// Это сохраняет логику "Нейтральности", а не полной невидимости.
