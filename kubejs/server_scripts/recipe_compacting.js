console.info('Hello, World! (Loaded server example script)')
ServerEvents.recipes(event => {
    
    event.recipes.create.compacting(
    ['minecraft:obsidian'],
    [Fluid.of('create:honey', 10), Ingredient.of('create:sturdy_sheet', 9)]).heated()
})