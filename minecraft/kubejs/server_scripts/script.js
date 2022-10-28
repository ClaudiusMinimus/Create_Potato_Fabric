// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	const item = ["kibe:wooden_bucket","kibe:water_wooden_bucket","kibe:water_ring","kibe:magma_ring","kibe:light_ring","kibe:escape_rope","kibe:pocket_crafting_table","kibe:pocket_trash_can","kibe:magnet","kibe:fluid_hopper","kibe:placer","kibe:breaker","kibe:drawbridge","kibe:igniter","kibe:redstone_timer","kibe:vacuum_hopper","kibe:heater","kibe:dehumidifier","kibe:chunk_loader","kibe:stone_spikes","kibe:iron_spikes","kibe:gold_spikes","kibe:diamond_spikes","kibe:cobblestone_generator_mk1","kibe:cobblestone_generator_mk2","kibe:cobblestone_generator_mk3","kibe:cobblestone_generator_mk4","kibe:cobblestone_generator_mk5","kibe:basalt_generator_mk1","kibe:basalt_generator_mk2","kibe:basalt_generator_mk3","kibe:basalt_generator_mk4","kibe:basalt_generator_mk5","kibe:regular_conveyor_belt","kibe:fast_conveyor_belt","kibe:express_conveyor_belt","kibe:white_elevator","kibe:orange_elevator","kibe:magenta_elevator","kibe:light_blue_elevator","kibe:yellow_elevator","kibe:lime_elevator","kibe:pink_elevator","kibe:gray_elevator","kibe:light_gray_elevator","kibe:cyan_elevator","kibe:blue_elevator","kibe:purple_elevator","kibe:green_elevator","kibe:brown_elevator","kibe:red_elevator","kibe:black_elevator"];
	let i = 0;
	let text = "";

	while (item[i]) {
		text = item[i];
		event.remove({output: text})
		i++;
	}

})

// Listen to player login event
onEvent('player.logged_in', event => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
	  // Add the stage
	  event.player.stages.add('starting_items')
	  // Give some items to player
	  event.player.give('minecraft:stone_sword')
	  event.player.give('minecraft:stone_pickaxe')
	  event.player.give('minecraft:stone_axe')
	  event.player.give('30x minecraft:apple')
	}
  }) 