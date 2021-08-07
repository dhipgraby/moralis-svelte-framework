<script>
	import { onMount } from "svelte";
	import { marketplace_format } from "@storage/dragon";
	import {
		getDetailsAllDragons,
		getDragonsForSale,
	} from "@contracts/methods";
	//COMPONENTS
	import DragonBox from "../components/marketplace/DragonBox.svelte";
	import CssFiles from "../components/factory/CssFiles.svelte";
	import Container from "../components/Container.svelte";

	let allDragons;

	onMount(async () => {
		let dragonsIds = await getDragonsForSale();
		allDragons = await getDetailsAllDragons(dragonsIds);
	});
</script>

<svelte:head>
	<title>Marketplace</title>
	<CssFiles />
</svelte:head>

<Container>
	<h1><i class="fas fa-store" /></h1>
	<h1>Marketplace</h1>

	<div class="row container" id="dragonGrid">
		{#if allDragons != undefined}
			{#each allDragons as dragon}
				<DragonBox dragonProps={marketplace_format(dragon)} />
			{/each}
		{/if}
	</div>
</Container>

<style>
	h1 {
		color: #ffffff;
	}
</style>
