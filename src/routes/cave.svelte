<script>
	import { onMount } from "svelte";
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
	let test 

	const dragonsSubscribe = userDragons.subscribe((dragons) => {
		test = dragons;
	});

	onMount(async () => {			
		let dragonsIds = await getAllYourDragonIds();
		allDragons = await getDetailsAllDragons(dragonsIds);
		console.log(allDragons)
		setUserDragons(allDragons)
	});

	function  myFunction() {
		modify()
	}

</script>

<svelte:head>
	<title>Dragon-masters Cavern</title>
	<CssFiles />
</svelte:head>

<Container>
	<h1><i class="fas fa-dungeon" /></h1>
	<h1>Dragon cavern</h1>
<button class="m-5 btn btn-light text-dark" on:click={myFunction}>Click me</button>
	<div class="row container" id="dragonGrid">
		{#if test != undefined}
			{#each test as dragon}
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
