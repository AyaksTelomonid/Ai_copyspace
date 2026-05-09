console.info('Hello, World! (Loaded server example script)')
ServerEvents.recipes(event => {
    //event.PlayerEvents.tick({Player})
    
    

 

  event.recipes.create.cutting([
    Item.of('create:shaft', 2),
     CreateItem.of('create:andesite_alloy', 0.25)],
    'create:andesite_alloy')



  
  
  
  console.log('Hello! The recipe event has fired!')
})
