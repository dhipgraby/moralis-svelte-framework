<script>
	import { onMount } from "svelte";
	import { Factory } from "@factory/Factory";
	import { dragonObj,showDragon,displaySingle,displayAll } from "@storage/dragon";
	import {
		getDetailsAllDragons,
		getDragonsForSale,
	} from "@contracts/methods";
	import DragonBox from "../components/marketplace/DragonBox.svelte";

	const FactoryClass = new Factory();
	let allDragons;
	let dragon_view;
	let currentDragon;

	const dragonView = showDragon.subscribe((value) => {
		dragon_view = value.show
	});

	const selected_dragon = dragonObj.subscribe((value) => {
		currentDragon = value
	});

	onMount(async () => {
		let dragonsIds = await getDragonsForSale();
		allDragons = await getDetailsAllDragons(dragonsIds);
	});

	function prepareDna(dragon) {
		var extractDna = {
			id: dragon.tokenId,
			dna: FactoryClass.dnaFromGenes(dragon.genes),
			gen: dragon.generation,
			displayDna: true,
			displayInfo: true,
			displayAttributes: true,
		};

		return extractDna;
	}

	function showCatalogue(event) {
		displayAll()
	}

</script>

<svelte:head>
	<title>Marketplace</title>

	<link rel="stylesheet" href="assets/frontend/css/cats.css" />
	<link rel="stylesheet" href="assets/frontend/css/animations.css" />
	<link rel="stylesheet" href="assets/frontend/css/catBox.css" />
	<link rel="stylesheet" href="assets/frontend/css/colors.css" />
	<link rel="stylesheet" href="assets/frontend/css/factory.css" />
</svelte:head>

<div class="mainContainer body" align="center">
	<div class="coverImg">
		<h1><i class="fas fa-store" /></h1>
		<h1>Marketplace</h1>

		<div class="row container" id="dragonGrid">
			{#if dragon_view}
				<DragonBox
					dragonProps={currentDragon}
					on:showAll={showCatalogue}
				/>
			{:else if allDragons != undefined}
				{#each allDragons as dragon}
					<DragonBox dragonProps={prepareDna(dragon)} />
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
