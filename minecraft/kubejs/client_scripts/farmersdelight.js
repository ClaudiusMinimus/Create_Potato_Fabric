// create PANTRIES array
const PANTRIES = ['farmersdelight:oak_pantry', 'farmersdelight:birch_pantry', 'farmersdelight:spruce_pantry', 'farmersdelight:dark_oak_pantry', 'farmersdelight:jungle_pantry', 'farmersdelight:crimson_pantry', 'farmersdelight:warped_pantry', 'farmersdelight:acacia_pantry']

onEvent('rei.hide.items', event => {
    // loop over PANTRIES array
    PANTRIES.forEach(pantry => {
        event.hide( pantry )
    })
})
