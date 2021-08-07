<script>
	import { onMount } from "svelte";
	import { user_format } from "@storage/dragon";
	import {
		getAllYourDragonIds,
		getDetailsAllDragons,
		isApprovedForAll,
	} from "@contracts/methods";
	//COMPONENTS
	import DragonBox from "../components/factory/DragonBox.svelte";
	import CssFiles from "../components/factory/CssFiles.svelte";
	import Container from "../components/Container.svelte";

	let allDragons;
	let approveForAll;

	onMount(async () => {
		approveForAll = await isApprovedForAll();
		let dragonsIds = await getAllYourDragonIds();
		allDragons = await getDetailsAllDragons(dragonsIds);
	});
</script>

<svelte:head>
	<title>Dragon-masters Cavern</title>
	<CssFiles />
</svelte:head>

<Container>
	<h1><i class="fas fa-dungeon" /></h1>
	<h1>Dragon cavern</h1>

	<div class="row container" id="dragonGrid">
		{#if allDragons != undefined}
			{#each allDragons as dragon}
				<DragonBox
					dragonProps={user_format(dragon)}
					menu={true}
					forSale={approveForAll}
				/>
			{/each}
		{/if}
	</div>
</Container>

<style>
	h1 {
		color: #ffffff;
	}
</style>
