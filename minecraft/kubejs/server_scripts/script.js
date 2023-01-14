// priority: 0

console.info("Remove recipes");

ServerEvents.recipes( event => {
	// Remove the following recipes

	const REMOVED_ITEMS = ["kibe:basalt_generator_mk1","kibe:basalt_generator_mk2","kibe:basalt_generator_mk3","kibe:basalt_generator_mk4","kibe:basalt_generator_mk5","kibe:big_torch","kibe:black_elevator","kibe:black_rune","kibe:blue_elevator","kibe:blue_rune","kibe:breaker","kibe:brown_elevator","kibe:brown_rune","kibe:chunk_loader","kibe:cobblestone_generator_mk1","kibe:cobblestone_generator_mk2","kibe:cobblestone_generator_mk3","kibe:cobblestone_generator_mk4","kibe:cobblestone_generator_mk5","kibe:cooler","kibe:cursed_dirt","kibe:cursed_droplets","kibe:cursed_kibe","kibe:cursed_lasso","kibe:cursed_seeds","kibe:cyan_elevator","kibe:cyan_rune","kibe:dehumidifier","kibe:dehumidifier","kibe:diamond_kibe","kibe:diamond_lasso","kibe:diamond_spikes","kibe:drawbridge","kibe:entangled_bag","kibe:entangled_bucket","kibe:entangled_chest","kibe:entangled_tank","kibe:escape_rope","kibe:express_conveyor_belt","kibe:fast_conveyor_belt","kibe:flowing_liquid_xp","kibe:fluid_hopper","kibe:gold_spikes","kibe:golden_kibe","kibe:golden_lasso","kibe:gray_elevator","kibe:gray_rune","kibe:green_elevator","kibe:green_rune","kibe:heater","kibe:heater","kibe:igniter","kibe:iron_spikes","kibe:kibe","kibe:light_blue_elevator","kibe:light_blue_rune","kibe:light_gray_elevator","kibe:light_gray_rune","kibe:light_ring","kibe:lime_elevator","kibe:lime_rune","kibe:liquid_xp_bucket","kibe:liquid_xp","kibe:magenta_elevator","kibe:magenta_rune","kibe:magma_ring","kibe:obsidian_sand","kibe:orange_elevator","kibe:orange_rune","kibe:pink_elevator","kibe:pink_rune","kibe:placer","kibe:purple_elevator","kibe:purple_rune","kibe:red_elevator","kibe:red_rune","kibe:redstone_timer","kibe:regular_conveyor_belt","kibe:stone_spikes","kibe:tank","kibe:torch_sling","kibe:vacuum_hopper","kibe:void_bucket","kibe:water_ring","kibe:water_wooden_bucket","kibe:white_elevator","kibe:white_rune","kibe:wither_builder","kibe:wither_proof_block","kibe:wither_proof_glass","kibe:wither_proof_sand","kibe:wooden_bucket","kibe:xp_drain","kibe:xp_shower","kibe:yellow_elevator","kibe:yellow_rune","emerald_tools:wooden_treeaxe","emerald_tools:wooden_excavator","emerald_tools:wooden_paxel","emerald_tools:wooden_hammer"];
	
	REMOVED_ITEMS.forEach(id => event.remove({ output: id }));
	
})

console.info("Remove reciped");

ServerEvents.recipes( event => {

	const LIGHT_SOURCES = [
		'minecraft:glowstone',
		'minecraft:ochre_froglight',
		'minecraft:verdant_froglight',
		'minecraft:pearlescent_froglight',
		'minecraft:sea_lantern',
		'minecraft:shroomlight'
	]

	LIGHT_SOURCES.forEach(id => event.shaped('16x minecraft:light', ['L','B'], {L: id, B: 'minecraft:blaze_rod'}))
	
})


// Listen to player login event
PlayerEvents.loggedIn( event => {
	
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
	  // Add the stage
	  event.player.stages.add('starting_items')
	  // Give some items to player
	  event.player.give('minecraft:stone_sword')
	  event.player.give('minecraft:stone_pickaxe')
	  event.player.give('minecraft:stone_axe')
	  event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:potato"}'))
	  event.player.give('30x minecraft:apple')
	}

  }) 