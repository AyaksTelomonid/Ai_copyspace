//technical
PlayerEvents.tick(event => {
    const { player, level, server } = event

    // Максимальная скорость проверки (каждые 2 тика = 10 раз в секунду)
    if (level.time % 2 != 0) return
    if (player.isCreative() || player.tags.contains('engineer')) return

    let hasDropped = false
    let inv = player.inventory

    // Проверяем все слоты инвентаря
    for (let i = 0; i < inv.containerSize; i++) {
        let item = inv.getItem(i)
        
        // Используем .id.contains для надежности в 1.21
        if (item && item.id.includes('create:')) {
            let toDrop = item.copy()
            inv.setItem(i, 'minecraft:air') // Мгновенно удаляем
            
            let entity = player.drop(toDrop, false, false)
            if (entity) {
                entity.setPickUpDelay(40) // Запрет подбора на 2 сек
                let look = player.lookAngle
                entity.setPos(player.x + look.x * 1.2, player.y + 1.2, player.z + look.z * 1.2)
            }
            hasDropped = true
        }
    }

    // Проверка второй руки (левой)
    let offhand = player.offhandItem
    if (offhand && offhand.id.includes('create:')) {
        player.drop(offhand.copy(), false, false).setPickUpDelay(40)
        player.setOffhandItem('minecraft:air')
        hasDropped = true
    }

    if (hasDropped) {
        player.setStatusMessage(Text.red('Ваши руки дрожат... Механизмы Create ускользают!'))
        player.containerMenu.broadcastChanges()
    }
})

//magician
PlayerEvents.tick(event => {
    const { player, level, server } = event
    // Максимальная скорость проверки (каждые 2 тика = 10 раз в секунду)
    if (level.time % 2 != 0) return
    if (player.isCreative() || player.tags.contains('witch')) return

    let hasDropped = false
    let inv = player.inventory

    // Проверяем все слоты инвентаря
    for (let i = 0; i < inv.containerSize; i++) {
        let item = inv.getItem(i)
        
        // Используем .id.contains для надежности в 1.21
        if (item && item.id.includes('irons_spellbooks:')) {
            let toDrop = item.copy()
            inv.setItem(i, 'minecraft:air') // Мгновенно удаляем
            
            let entity = player.drop(toDrop, false, false)
            if (entity) {
                entity.setPickUpDelay(40) // Запрет подбора на 2 сек
                let look = player.lookAngle
                entity.setPos(player.x + look.x * 1.2, player.y + 1.2, player.z + look.z * 1.2)
            }
            hasDropped = true
        }
    }

    // Проверка второй руки (левой)
    let offhand = player.offhandItem
    if (offhand && offhand.id.includes('irons_spellbooks:')) {
        player.drop(offhand.copy(), false, false).setPickUpDelay(40)
        player.setOffhandItem('minecraft:air')
        hasDropped = true
    }

    if (hasDropped) {
        player.setStatusMessage(Text.red('Неведомая сила вырывает предметы из ваших рук...'))
        player.containerMenu.broadcastChanges()
    }
})

//SCULK
PlayerEvents.tick(event => {
    const { player, level, server } = event
    // Максимальная скорость проверки (каждые 2 тика = 10 раз в секунду)
    if (level.time % 2 != 0) return
    if (player.isCreative() || player.tags.contains('sculk')) return

    let hasDropped = false
    let inv = player.inventory

    // Проверяем все слоты инвентаря
    for (let i = 0; i < inv.containerSize; i++) {
        let item = inv.getItem(i)
        
        // Используем .id.contains для надежности в 1.21
        if (item && item.id.includes('sculk')) {
            let toDrop = item.copy()
            inv.setItem(i, 'minecraft:air') // Мгновенно удаляем
            
            let entity = player.drop(toDrop, false, false)
            if (entity) {
                entity.setPickUpDelay(40) // Запрет подбора на 2 сек
                let look = player.lookAngle
                entity.setPos(player.x + look.x * 1.2, player.y + 1.2, player.z + look.z * 1.2)
            }
            hasDropped = true
        }
    }

    // Проверка второй руки (левой)
    let offhand = player.offhandItem
    if (offhand && offhand.id.includes('sculk')) {
        player.drop(offhand.copy(), false, false).setPickUpDelay(40)
        player.setOffhandItem('minecraft:air')
        hasDropped = true
    }

    if (hasDropped) {
        player.setStatusMessage(Text.red('Предмет пытается вас укусить и вырывается из рук'))
        player.containerMenu.broadcastChanges()
    }
})
//rase
PlayerEvents.tick(event => {
    const { player, level, server } = event

    // Проверка раз в 2 секунды (40 тиков)
    if (level.time % 40 != 0) return
    if (player.creativeMode) return

    // Используем твою рабочую команду

    if (check == 1) {
        if (!player.tags.contains('engineer')) {
            player.addTag('engineer')
            player.tell(Text.aqua('Ваша связь с воздухом позволяет вам управлять механизмами!'))
        }
    } else {
        if (player.tags.contains('engineer')) {
            player.removeTag('engineer')
            player.tell(Text.gray('Инженерные знания покинули вас.'));
        }
    }
})
