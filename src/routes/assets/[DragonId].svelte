<script context="module">
	export async function preload({ params }) {
		return { dragonId: params.DragonId };
	}
</script>

<script>
	import { onMount } from "svelte";
	import { getDragon } from "@contracts/methods";
	import { offer_format } from "@storage/dragon";
	//COMPONENTS
	import DragonBox from "../../components/marketplace/DragonBox.svelte";
	import CssFiles from "../../components/factory/CssFiles.svelte";
	import Container from "../../components/Container.svelte";

	export let dragonId;

	let dragonProps;

	onMount(async () => {
		dragonProps = await getDragon(dragonId);
		dragonProps.tokenId = dragonId
		dragonProps = offer_format(dragonProps)
	});
</script>

<svelte:head>
	<CssFiles />
</svelte:head>

<Container>
	<div class="row container">
		{#if dragonProps}
			<DragonBox  {dragonProps} />			
		{:else}
			<h1>Not found</h1>
		{/if}
	</div>
</Container>

<style>

	h1 {
		color: #ffffff;
	}
</style>

