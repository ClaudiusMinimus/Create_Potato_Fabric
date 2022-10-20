// Listen to server recipe event
onEvent('recipes', event => {

    //remove default recipe for chisel as it conflicts with veggie_way:knife
    event.remove({ output: 'chisel:chisel' })

    // Add shaped recipe for chisel
    event.shaped('chisel:chisel', [
        'I',
        'S'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
    })
})
