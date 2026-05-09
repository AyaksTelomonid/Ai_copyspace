StartupEvents.registry('item', event => {
    // Предмет для Магов
    event.create('soul_anchor')
        .displayName('Якорь Духа')
        .glow(true)
        .rarity('epic')
        .tooltip('§7Позволяет вытянуть душу союзника из Пустоты')
        .tooltip('§eЗажмите [W] для просмотра ритуала')

    // Предмет для Техников
    event.create('reanimation_module')
        .displayName('Модуль Реанимации')
        .rarity('epic')
        .tooltip('§7Высокотехнологичное устройство для восстановления сознания')
        .tooltip('§eЗажмите [W] для просмотра ритуала')

    // Предмет для Улья
    event.create('sculk_heart')
        .displayName('Сердце Скульптора')
        .glow(true)
        .rarity('epic')
        .tooltip('§7Бьющееся сердце бездны, зовущее своих детей обратно')
        .tooltip('§eЗажмите [W] для просмотра ритуала')
})
