ServerEvents.recipes(event => {
    event.shapeless(
    Item.of('create:cogwheel'), // arg 1: output
    [
      'create:shaft',
      '#minecraft:planks'
    ]
  )
  event.shapeless(
    Item.of('create:large_cogwheel'), // arg 1: output
    [
      'create:shaft',
      '2x #minecraft:planks'
    ]
  )


  event.shapeless(
    Item.of('create:clutch'), // arg 1: output
    [
      'create:andesite_casing',
      'create:shaft',
      'minecraft:redstone'
    ]
  )

  event.shapeless(
    Item.of('create:large_cogwheel'), // arg 1: output
    [
      'create:cogwheel',
      '#minecraft:planks'
    ]
  )

   event.shapeless(
    Item.of('create:encased_chain_drive'), // arg 1: output
    [
      'create:andesite_casing',
      '3x minecraft:iron_nugget'
    ]
  )

  event.shapeless(
    Item.of('create:gearshift'), // arg 1: output
    [
      'create:andesite_casing',
      'minecraft:redstone',
      'create:cogwheel'
    ]
  )
  event.shapeless(
    Item.of('create:adjustable_chain_gearshift'), // arg 1: output
    [
      'create:gearshift',
      'create:electron_tube'
    ]
  )
  event.shapeless(
    Item.of('minecraft:popped_chorus_fruit'), // arg 1: output
    [
      'create:dough',
      'minecraft:purple_dye'
    ]
  )
})