EntityEvents.spawned('minecraft:player', event => {
    const { player } = event
    if (player.persistentData.isDead) {
        // Телепорт на платформу 0 100 0 в мире душ
        player.teleportTo('kubejs:soul_world', 0.5, 100, 0.5, 0, 0)
        player.setGameMode('adventure')
        // Очистка эффектов, чтобы не умер от голода/дебаффов снова
        player.potionEffects.clear()
        player.health = 20
        player.tell('§7Ваша душа покинула тело. Ожидайте ритуала воскрешения...')
    }
})


EntityEvents.death('minecraft:player', event => {
    // Маркируем игрока как мертвого
    event.entity.persistentData.isDead = true
})

