PlayerEvents.tick(event => {
    const { player, level, server } = event

    // Проверка раз в секунду
    if (level.time % 20 != 0 || player.creativeMode) return

    let sculkTime = player.persistentData.getInt('sculk_time') || 0
    let blockUnder = player.block.down
    let blockAt = player.block
    let isSculk = (b) => b.id.includes('sculk') ||b.id.includes('deeperdarker')|| b.hasTag('c:sculk_blocks')

    // --- ЕСЛИ ИГРОК НА СКАЛКЕ ---
    if (isSculk(blockUnder) || isSculk(blockAt)) {
        if (!player.tags.contains('sculk')) {
            sculkTime++
            
            player.potionEffects.add('minecraft:darkness', 80, 0, false, false)
            player.potionEffects.add('minecraft:slowness', 80, 1, false, false)
            if (sculkTime >= 30) {
                if (level.time % 100 == 0) { // Каждые 5 секунд
                    player.attack(2.0)
                    player.playSound('minecraft:block.sculk.charge')

                    player.potionEffects.add('minecraft:weakness', 100, 1, false, false)
                    player.potionEffects.add('minecraft:hunger', 100, 1, false, false)
                }
            }
            let offsetX = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)
            let offsetZ = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)
            let offsetY = Math.random() *10 -8
            if (Math.random() < 0.3){
                server.runCommandSilent(`execute at ${player.uuid} run playsound minecraft:entity.warden.heartbeat master @p ~${offsetX} ~${offsetZ} ~${offsetZ} 1 0.5`)
                level.spawnParticles(
                'minecraft:squid_ink', 
                true, 
                player.x + offsetX, player.y + offsetY, player.z + offsetZ, 
                0.1, 0.1, 0.1, // Разброс частиц
                200,            // Количество
                0.02           // Скорость разлета
                )
                 if (Math.random() < 0.4) {
                level.spawnParticles(
                    'minecraft:sculk_soul', 
                    true, 
                    player.x + offsetX, player.y + offsetY, player.z + offsetZ, 
                    0.5, 0.5, 0.5, 
                    5, 
                    0.01
                )
            }
                }
            if (Math.random() < 0.01){
                server.runCommandSilent(`execute at ${player.uuid} run playsound deeperdarker:entity.shriek_worm.ambient master @p ~${offsetX} ~${offsetZ} ~${offsetZ} 1 0.5`)
                }
        } else {
            sculkTime = 0 // "Свои" очищаются мгновенно
            player.potionEffects.add('minecraft:regeneration', 100, 1, false, false)
            player.potionEffects.add('minecraft:night_vision', 300, 1, false, false)

        }
    } 
    // --- ЕСЛИ ИГРОК В БЕЗОПАСНОСТИ (НЕ НА СКАЛКЕ) ---
    else {
        if (sculkTime > 0) {
            sculkTime-- // Уменьшаем на 1 каждую секунду
            
            // Визуальный эффект очищения (если заражение еще высокое)
            if (sculkTime > 5) {
                level.spawnParticles('minecraft:spore_blossom_air', true, player.x, player.y + 1, player.z, 0.5, 0.5, 0.5, 3, 0.01)
            }
        }
    }

    // Сохраняем результат
    player.persistentData.putInt('sculk_time', sculkTime)
    
    // Вывод статуса для теста (можно удалить потом)
    if (sculkTime > 0) {
        player.setStatusMessage(Text.darkAqua(`Заражение: ${sculkTime} сек.`))
    }
})

// Команда сброса (оставляем для удобства)
ServerEvents.commandRegistry(event => {
    event.register(event.commands.literal('reset_sculk').requires(s => s.hasPermission(2)).executes(c => {
        c.source.player.persistentData.putInt('sculk_time', 0)
        c.source.player.tell('Сброшено!')
        return 1
    }))
})

EntityEvents.death('minecraft:player', event => {
    const { player, server, source } = event
    
    // Проверяем уровень заражения из нашего прошлого скрипта
    let sculkTime = player.persistentData.getInt('sculk_time') || 0
    
    // Если игрок умер, имея высокий уровень заражения (от 30 и выше)
    // И источник урона был "magic" или "generic" (так как player.attack() бьет этим типом)
    if (sculkTime >= 30) {
        
        // Создаем сообщение
        let deathMessage = Text.darkAqua(`[${player.name.string}] `).append(Text.gray('стал частью скалка...'))
        
        // Отправляем всем игрокам
        server.tell(deathMessage)
        
        // Дополнительный эффект: спавним катализатор на месте смерти (опционально)
        if (player.block.id == 'minecraft:air') {
            player.block.set('minecraft:sculk_catalyst')
        }
    }
})


