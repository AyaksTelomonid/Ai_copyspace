ServerEvents.recipes(event => {
    // event.remove ({mod: 'sophisticatedbackpacks'})
    // event.remove ({mod: 'create'})
  // Удаляем рецепты, которые соответствуют ВСЕМ условиям ниже:
  // Список модов, из которых мы хотим удалить рецепты
  const modsToRemove = ['create', 'sophisticatedbackpacks']
  
  // Список тегов-исключений (используем новые c: теги для 1.21)
  const tagsToKeep = [
    '#minecraft:slabs',
    '#c:storage_blocks',
    '#c:glass_blocks',
    '#c:glass_panes',
    '#minecraft:stairs',
    '#minecraft:walls',
    '#c:slabs',
    '#c:stairs',
    '#c:walls',
    '#minecraft:doors',
    '#minecraft:trapdoors'
  ]
  const nameToKeep = [
    { output: /.*:.*_slab/ },
    { output: /.*:.*_stairs/ },
    { output: /.*:.*_wall/ },
    { output: /.*:.*_glass/ },
    {output: /.*_cut.*/},
    {output: /.*cut_.*/},
    {output: /.*polished_.*/},
    {output: /.*_polished.*/},
    {output: /.*_bricks.*/},
    {output: /.*bricks_.*/},
    {output: /.*layered_.*/},
    {output: /.*_layered.*/},
    {output: /.*_pillar.*/},
    {output: /.*pillar_.*/},
    {output: /.*ladder.*/},
    {output: /.*bars.*/},
    {output: /.*seat.*/},
    {output: /.*scaffolding.*/},
    {output: /.*copycat.*/},
    {output: /.*girder.*/},
    {output: /.*bracket.*/},
    {output: /.*whistle.*/},
    {output: /.*bracket.*/},
  ]
  modsToRemove.forEach(modID => {
    event.remove({
      mod: modID,
      not: [
        { output: tagsToKeep },
        // Дополнительная защита: если в ID предмета есть слово 'slab' или 'stairs'
        nameToKeep
      ]
    })
  })

    event.recipes.create.sequenced_assembly([
        'kubejs:reanimation_module' // Финальный предмет
    ], 'create:precision_mechanism', [ // Входной предмет
        // 1. Деплоинг (Установка незерита)
        event.recipes.createDeploying('create:incomplete_precision_mechanism', [
            'create:incomplete_precision_mechanism', 
            'minecraft:netherite_ingot'
        ]),
        // 2. Наполнение жидкостью (Исправленный синтаксис)
        // Если мода на опыт нет, замени 'minecraft:lava' на нужную жидкость
        event.recipes.createFilling('create:incomplete_precision_mechanism', [
            'create:incomplete_precision_mechanism',
            Fluid.of('minecraft:lava', 1000) 
        ]),
        // 3. Деплоинг (Установка контрольного чипа)
        event.recipes.createDeploying('create:incomplete_precision_mechanism', [
            'create:incomplete_precision_mechanism', 
            'create_connected:control_chip'
        ])
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(5) // 5 циклов для сложности

    event.shaped('kubejs:soul_anchor', [
    'LGL',
    'ESE',
    'LGL'
], {
    L: 'irons_spellbooks:legendary_ink',
    G: 'minecraft:ghast_tear',
    E: 'irons_spellbooks:arcane_essence',
    S: 'minecraft:nether_star'
})

  event.shapeless('kubejs:sculk_heart', [
      'minecraft:nether_star',
      '8x minecraft:echo_shard'
  ])

})