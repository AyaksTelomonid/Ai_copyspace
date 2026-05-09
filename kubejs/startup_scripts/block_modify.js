// // @ts-nocheck

// BlockEvents.modification(event => {
    
//     // 1. Апгрейд sculk_armor -> sculk_armor
//     event.modify('kubejs:sculk_armor', block => {
//         block.randomTick(tick => {
//             const { block: currentBlock, level } = tick
            
//             if (Math.random() < 0.10) {
//                 currentBlock.set('kubejs:sculk_armor_2')
//                 level.spawnParticles('minecraft:sculk_charge_pop', true, currentBlock.x + 0.5, currentBlock.y + 1, currentBlock.z + 0.5, 0.2, 0.2, 0.2, 10, 0.05)
//                 // Исправленный синтаксис звука для событий блоков
//                 level.playSound(null, currentBlock.x, currentBlock.y, currentBlock.z, 'minecraft:block.sculk_catalyst.bloom', 'blocks', 1.0, 0.5)
//             }
//         })
//     })

//     // 2. Апгрейд ванильного скалка -> sculk_armor
//     event.modify('minecraft:sculk', block => {
//         block.randomTick(tick => {
//             const { block: currentBlock, level } = tick
            
//             if (Math.random() < 0.05) {
//                 currentBlock.set('kubejs:sculk_armor')
//                 level.spawnParticles('minecraft:sculk_charge', true, currentBlock.x + 0.5, currentBlock.y + 1, currentBlock.z + 0.5, 0.3, 0.3, 0.3, 5, 0.01)
//                 level.playSound(null, currentBlock.x, currentBlock.y, currentBlock.z, 'minecraft:block.sculk.charge', 'blocks', 0.8, 0.6)
//             }
//         })
//     })
// })
