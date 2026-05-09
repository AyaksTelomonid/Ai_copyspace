ServerEvents.recipes(event => {
    
    
  
  event.recipes.create.mechanical_crafting('sophisticatedbackpacks:backpack', [
    'RUUUR',
    'RUCUR',
    'RUUUR',
  ], {
    R: 'farmersdelight:rope',
    U: 'sophisticatedbackpacks:upgrade_base',
    C: 'minecraft:chest'
  })
  event.recipes.create.mechanical_crafting('create:copper_backtank', [
    ' I ',
    'HCP',
    'STS',
    'STS',
    ' S ',
  ], {
    S: 'create:copper_sheet',
    I: 'create:shaft',
    P: 'create:fluid_pipe',
    T: 'create:fluid_tank',
    C: 'create:cogwheel',
    H: '#create:valve_handles'
  })
  event.recipes.create.mechanical_crafting('create:wrench', [
    'SL',
    'SL',
    'IC',
    ' R'
  ], {
    S: 'create:golden_sheet',
    I: 'create:shaft',
    L: '#minecraft:logs',
    C: 'create:cogwheel',
    R: '#c:rods'
  })

  event.recipes.create.mechanical_crafting('create:crushing_wheel', [
    'SSSSS',
    'SAPAS',
    'SPIPS',
    'SAPAS',
    'SSSSS'
  ], {
    S: 'create:sturdy_sheet',
    I: 'create:shaft',
    A: 'create:andesite_alloy_block',
    P: '#minecraft:planks'
  })

  event.shaped(
    Item.of('create:linked_controller'), // arg 1: output
    [
    'BBB',
    'BBB',
    'ECT'
    ],
    {
    B: '#minecraft:buttons',
    T: 'create:transmitter',
    E: 'create:electron_tube',
    C: 'create:andesite_casing'
    }
  )

  event.shaped(
    Item.of('create:basin'), // arg 1: output
    [
    'S S',
    'SSS'
    ],
    {
    S: 'create:sturdy_sheet',
    }
  )



  //event.recipes.create.deploying('minecraft:diamond', ['minecraft:coal_block', 'minecraft:sand'])
  //event.recipes.create.deploying(['minecraft:diamond', 'minecraft:emerald'], ['minecraft:coal_block', 'minecraft:sand']).keepHeldItem()
  
  event.shaped(
    Item.of('create:empty_blaze_burner'), // arg 1: output
    [
    'III',
    'INI',
    'III'
    ],
    {
    N: 'minecraft:netherrack',
    I: 'minecraft:iron_bars'
    }
  )

  event.shaped(
    Item.of('create:gearbox'), // arg 1: output
    [
    ' C ',
    'CAC',
    ' C '
    ],
    {
    A: 'create:andesite_casing',
    C: 'create:cogwheel'
    }
  )
  event.shaped(
    Item.of('create:gearbox'), // arg 1: output
      [
     'G'
      ],
     {
     G: 'create:vertical_gearbox'
     }
  )
  event.shaped(
    Item.of('create:vertical_gearbox'), // arg 1: output
      [
     'G'
      ],
     {
     G: 'create:gearbox'
     }
  )

  event.shaped(
    Item.of('create:vertical_gearbox'), // arg 1: output
    [
    'C C',
    ' A ',
    'C C'
    ],
    {
    A: 'create:andesite_casing',
    C: 'create:cogwheel'
    }
  )
  event.shaped(
    Item.of('create:schematic_table'), // arg 1: output
    [
    'S',
    'C'
    ],
    {
    S: 'create:empty_schematic',
    C: 'minecraft:crafting_table'
    }
  )
  event.shaped(
    Item.of('create:shaft', 2), // arg 1: output
    [
    'S',
    'S'
    ],
    {
    S: 'create:shaft'
    }
  )
  event.shaped(
    Item.of('create:shaft', 4), // arg 1: output
    [
    'S',
    'S'
    ],
    {
    S: 'create:andesite_alloy'
    }
  )

  event.shaped(
    Item.of('create:belt_connector', 2), // arg 1: output
    [
    'LLL',
    'LLL'
    ],
    {
    L: 'minecraft:dried_kelp'
    }
  )

  event.shaped(
    Item.of('create:water_wheel'), // arg 1: output
    [
    'LLL',
    'LSL',
    'LLL'
    ],
    {
    L: '#minecraft:planks',
    S: 'create:shaft'
    }
  )

   event.shaped(
    Item.of('create:large_water_wheel'), // arg 1: output
    [
    'LLL',
    'LSL',
    'LLL'
    ],
    {
    L: '#minecraft:planks',
    S: 'create:water_wheel'
    }
  )

  event.shaped(
    Item.of('create:encased_fan'), // arg 1: output
    [
    'S',
    'C',
    'P'
    ],
    {
    C: 'create:andesite_casing',
    S: 'create:shaft',
    P: 'create:propeller'
    }
  )

   event.shaped(
    Item.of('create:nozzle'), // arg 1: output
    [
    'SSS',
    'SWS',
    'AAA'
    ],
    {
    A: 'create:andesite_alloy',
    S: 'minecraft:string',
    W: '#minecraft:wool'
    }
  )

  event.shaped(
    Item.of('create:turntable'), // arg 1: output
    [
    'S',
    'C'
    ],
    {
    S: '#minecraft:wooden_slabs',
    C: 'create:shaft'
    }
  )

  event.shaped(
    Item.of('create:hand_crank'), // arg 1: output
    [
    'PPP',
    '  A'
    ],
    {
    P: '#minecraft:planks',
    A: 'create:andesite_alloy'
    }
  )

  event.shaped(
    Item.of('create:hand_crank'), // arg 1: output
    [
    'PPP',
    'A  '
    ],
    {
    P: '#minecraft:planks',
    A: 'create:andesite_alloy'
    }
  )

  event.shaped(
    Item.of('create:cuckoo_clock'), // arg 1: output
    [
    'WPW',
    'LCL',
    'LRL'
    ],
    {
    P: '#minecraft:planks',
    C: 'create:cogwheel',
    R: 'minecraft:redstone',
    W: '#minecraft:wooden_stairs',
    L: '#minecraft:logs'
    }
  )

  event.shaped(
    Item.of('create:chain_conveyor'), // arg 1: output
    [
    ' P ',
    'PCP',
    ' P '
    ],
    {
    P: 'create:andesite_casing',
    C: 'create:large_cogwheel'
    }
  )

  event.shaped(
    Item.of('create:millstone'), // arg 1: output
    [
    'SCS',
    'SIS'
    ],
    {
    S: '#c:stones',
    C: 'create:cogwheel',
    I: 'create:shaft'
    }
  )
event.shaped(
    Item.of('create:mechanical_press'), // arg 1: output
    [
    ' S ',
    'CAC',
    'RIR'
    ],
    {
    I: 'minecraft:iron_block',
    A: 'create:andesite_casing',
    S: 'create:shaft',
    C: 'create:cogwheel',
    R: 'minecraft:iron_ingot'
    }
  )

  event.shaped(
    Item.of('create:mechanical_mixer'), // arg 1: output
    [
    ' C ',
    'SAS',
    'RWR'
    ],
    {
    W: 'create:whisk',
    A: 'create:andesite_casing',
    S: 'create:shaft',
    C: 'create:cogwheel',
    R: 'minecraft:iron_ingot'
    }
  )

  event.recipes.create.mechanical_crafting('create:wand_of_symmetry', [
    'B',
    'E',
    'S',
    'S'
  ], {
    E: 'minecraft:end_rod',
    S: 'create:sturdy_sheet',
    B: 'create:brass_sheet'
  })
  event.recipes.create.mechanical_crafting('create:schematicannon', [
    ' C ',
    ' C ',
    ' G ',
    'LML',
    ' P '
  ], {
    P: 'create:propeller',
    C: 'create:chute',
    M: 'create:precision_mechanism',
    G: 'create:gearbox',
    L: '#minecraft:logs'
  })
  event.recipes.create.mechanical_crafting('create:extendo_grip', [
    ' RRS ',
    'HRRCM',
    ' RRSA'
  ], {
    H: 'create:brass_hand',
    R: '#c:rods',
    S: 'create:brass_sheet',
    C: 'create:cogwheel',
    A: 'create:andesite_alloy',
    M: 'create:precision_mechanism'
  })
  
  event.recipes.create.mechanical_crafting('create:potato_cannon', [
    'PPMCO',
    '  TP '
  ], {
    P: 'create:fluid_pipe',
    M: 'create:mechanical_pump',
    T: 'create:fluid_tank',
    C: 'create:copper_casing',
    O: 'create:precision_mechanism'
  })
    event.smithing(
    'create:netherite_backtank',                     // arg 1: output
    'minecraft:netherite_upgrade_smithing_template', // arg 2: the smithing template
    'create:copper_backtank',                          // arg 3: the item to be upgraded
    'minecraft:netherite_ingot'                            // arg 4: the upgrade item
  )
    event.recipes.create.mechanical_crafting('sophisticatedbackpacks:copper_backpack', [
    'UUU',
    'UBU',
    'UUU',
  ], {
    B: 'sophisticatedbackpacks:backpack',
    U: 'sophisticatedbackpacks:upgrade_base'
    
  })
  event.shaped(
    Item.of('neoorigins:orb_of_origin', 1),
    [
        'A B',
        ' C ',
        'B A'
    ],
    {
        A: 'minecraft:recovery_compass',
        B: 'minecraft:diorite',
        C: 'minecraft:granite'
    }
    )
    
    event.replaceInput(
  { input: 'minecraft:stick' },
  'minecraft:stick',
  '#minecraft:saplings'
)
    event.shaped(
    Item.of('create:cardboard_sword', 1),
    [
        ' A ',
        ' A ',
        ' B '
    ],
    {
        A: 'create:cardboard',
        B: 'create:pulp',
    }
    )
    const potting = (output, pottedInput) => {
    event.shaped(output, [
      'BIB',
      ' B '
    ], {
      B: 'minecraft:brick',
      I: pottedInput
    })
  }
})