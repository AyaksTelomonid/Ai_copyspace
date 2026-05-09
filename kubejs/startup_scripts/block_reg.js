// @ts-nocheck
Platform.mods.kubejs.name = 'Frost_Craft'

StartupEvents.registry('block', event => {
    // Регистрация первой стадии
    event.create('sculk_armor')
        .displayName('Скалковая броня 1 lvl')
        .soundType('sculk')
        .hardness(8)
        .resistance(10)
        .noDrops()
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('c:sculk_blocks')

    // Регистрация второй стадии
    event.create('sculk_armor_2')
        .displayName('Скалковая броня 2 lvl')
        .soundType('sculk')
        .hardness(10)
        .resistance(6)
        .noDrops()
        .requiresTool(true)
        .tagBlock('minecraft:mineable/axe')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('c:sculk_blocks')
})
