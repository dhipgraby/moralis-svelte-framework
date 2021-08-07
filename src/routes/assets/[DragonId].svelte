<script context="module">
	export async function preload({ params }) {
		return { dragonId: params.DragonId };
	}
</script>

<script>
	import { onMount } from "svelte";
	import { getDragon } from "@contracts/methods";
	import { offer_format } from "@storage/dragon"
	//COMPONENTS
	import DragonBox from "../../components/marketplace/DragonBox.svelte";
	import OfferBox from "../../components/marketplace/OfferBox.svelte";
	import CssFiles from "../../components/factory/CssFiles.svelte";
	import Container from "../../components/Container.svelte";

	export let dragonId;

	let dragonProps;

	onMount(async () => {
		dragonProps = await getDragon(dragonId);
		console.log(dragonProps)
	});
</script>

<svelte:head>
	<CssFiles />
</svelte:head>

<Container>
	<h1>single dragon</h1>
	{#if dragonProps}
		<DragonBox dragonProps={offer_format(dragonProps) } />
	{:else}
		<h1>Not found</h1>
	{/if}
</Container>

<style>
	h1 {
		color: #ffffff;
	}
</style>
