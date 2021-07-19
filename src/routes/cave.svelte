<script>
	import { onMount } from "svelte";
	import { Factory } from "@factory/Factory";
	import { getAllYourCatIds,getDetailsAllCats } from "@contracts/methods";

	const FactoryClass = new Factory();
	let allDragons;

	onMount(async () => {
		let allcats = await getAllYourCatIds();
		var dragArr = {};
		allDragons = await getDetailsAllCats(allcats);
		
		for (var i = 0; i < allDragons.length; i++) {
			console.log(allDragons[i])
			dragArr = {
				id: i,
				dna: FactoryClass.dnaFromGenes(allDragons[i].genes),
				gen: allDragons[i].generation,
			};
			
			FactoryClass.getHtmlForKitty(dragArr);
			FactoryClass.render(dragArr, "#kitty" + i);
		}
		
	});
	
</script>

<svelte:head>
	<title>Dragon-masters Cavern</title>

	<link rel="stylesheet" href="assets/frontend/css/cats.css" />
	<link rel="stylesheet" href="assets/frontend/css/animations.css" />
	<link rel="stylesheet" href="assets/frontend/css/catBox.css" />
	<link rel="stylesheet" href="assets/frontend/css/colors.css" />
	<link rel="stylesheet" href="assets/frontend/css/factory.css" />
</svelte:head>

<div class="mainContainer body" align="center">
<div class="coverImg">
	<h1><i class="fas fa-dungeon" /></h1>
	<h1>Dragon cavern</h1>

	<div class="row container" id="dragonGrid"></div>
</div>
</div>

<style>

.body {
		background-color: #4f2828;
		background-image: linear-gradient(to top right, #000000 45%, #4f2828);
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 100vh;
	}

	h1 {
		color: #ffffff;
	}
</style>
