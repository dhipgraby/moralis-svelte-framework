<script>
	import { onMount } from "svelte";
	import { Factory } from "@factory/Factory";
	import { marketplace_format } from "@storage/dragon";
	import {
		getDetailsAllDragons,
		getDragonsForSale,
	} from "@contracts/methods";
	import DragonBox from "../components/marketplace/DragonBox.svelte";

	const FactoryClass = new Factory();
	let allDragons;

	onMount(async () => {
		let dragonsIds = await getDragonsForSale();
		allDragons = await getDetailsAllDragons(dragonsIds);
	});

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
			
			{#if allDragons != undefined}
				{#each allDragons as dragon}
					<DragonBox dragonProps={marketplace_format(dragon)} />
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
