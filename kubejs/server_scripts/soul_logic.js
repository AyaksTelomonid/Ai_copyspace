// 1. Фиксируем смерть
EntityEvents.death('minecraft:player', event => {
    event.entity.persistentData.isDead = true
    event.entity.tell("§cВаша душа отделяется от тела...")
})

// 2. Ловим момент появления в мире (после нажатия кнопки Respawn)
PlayerEvents.respawned(event => {
    const { player, server } = event
    
    if (player.persistentData.isDead) {
        // Используем задержку, чтобы перебить ванильный респавн
        server.scheduleInTicks(5, (callback) => {
            player.teleportTo('my_event:soul_world', 0.5, 100, 0.5, 0, 0)
            player.setGameMode('adventure')
            player.tell("§7Вы заперты в мире душ.")
        })
    }
})

// 3. "Петля безопасности": если мертвый игрок оказался не в том мире, возвращаем его
PlayerEvents.tick(event => {
    const { player, level } = event
    // Проверка раз в секунду (20 тиков), чтобы не нагружать сервер
    if (level.time % 20 == 0) {
        if (player.persistentData.isDead && level.dimension != 'my_event:soul_world') {
            player.teleportTo('my_event:soul_world', 0.5, 100, 0.5, 0, 0)
        }
    }
})

// 4. Команда для проверки (введи в чате: /soul_status)
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal('soul_status')
            .executes(ctx => {
                let player = ctx.source.player
                player.tell(`Статус смерти: ${player.persistentData.isDead}`)
                player.tell(`Текущий мир: ${player.level.dimension}`)
                return 1
            })
    )
})
