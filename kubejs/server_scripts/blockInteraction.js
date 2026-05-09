BlockEvents.rightClicked('minecraft:chest', event => event.cancel())

  BlockEvents.broken('minecraft:stone', event => {
    event.block.set('minecraft:cobblestone')
    event.cancel()
  })
  BlockEvents.broken('minecraft:cobblestone', event => {
    event.block.set('minecraft:gravel')
    event.cancel()
  })
  BlockEvents.broken('kubejs:sculk_armor_2', event => {
    event.block.set('kubejs:sculk_armor')
    event.cancel()
  })
  BlockEvents.broken('kubejs:sculk_armor', event => {
    event.block.set('minecraft:sculk')
    event.cancel()
  })