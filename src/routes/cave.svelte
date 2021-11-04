<script>
	import { afterUpdate, onMount } from "svelte";
	import { userDragons,setUserDragons,modify } from "@storage/dragon";
	import {
		getAllYourDragonIds,
		getDetailsAllDragons,	
		
	} from "@contracts/methods";
	//COMPONENTS
	import DragonBox from "../components/factory/DragonBox.svelte";
	import CssFiles from "../components/factory/CssFiles.svelte";
	import Container from "../components/Container.svelte";

	let allDragons;

	const dragonsSubscribe = userDragons.subscribe((dragons) => {
		allDragons = dragons;
	});

	onMount(async () => {			
		let dragonsIds = await getAllYourDragonIds();
		let user_dragons = await getDetailsAllDragons(dragonsIds);		
		setUserDragons(user_dragons)
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
					dragonProps={dragon}
					menu={true}
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
