<script>
	import { onMount } from "svelte";
	import { Factory } from "@factory/Factory";
	import { getAllYourDragonIds, getDetailsAllDragons,isApprovedForAll } from "@contracts/methods";
	import DragonBox from '../components/factory/DragonBox.svelte'

	const FactoryClass = new Factory();
	let allDragons;
	let approveForAll;

	onMount(async () => {

		approveForAll = await isApprovedForAll()		
		let dragonsIds = await getAllYourDragonIds();
		allDragons = await getDetailsAllDragons(dragonsIds);
		
	});

	function prepareDna(dragon) {
		var extractDna = {
			id: dragon.tokenId,
			dna: FactoryClass.dnaFromGenes(dragon.genes),
			gen: dragon.generation,
		};

		return extractDna;
	}
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

		<div class="row container" id="dragonGrid">
			{#if allDragons != undefined}
				{#each allDragons as dragon}
				
					<DragonBox dragonProps={prepareDna(dragon)} menu={true} forSale={approveForAll} />

				{/each}
			{/if}
		</div>
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
