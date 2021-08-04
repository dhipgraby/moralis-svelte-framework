<script>
	import { onMount } from "svelte";
	import { Factory } from "@factory/Factory";
	import { getForSaleDetails } from "@contracts/methods";
	import { fade } from "svelte/transition";
	import FullDragon from "../dragon/FullDragon.svelte"
	import CircleMenu from "../dragon/CircleMenu.svelte";

	const FactoryClass = new Factory();

	export let dragonProps
	export let menu = false;
	export let forSale = false;

	onMount(async () => {

		if (forSale) {
			let offerDetails = await getForSaleDetails(dragonProps.id);
			if (offerDetails != false) dragonProps.offer = offerDetails;
			dragonProps.isowner = true 
		}
		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});

	let hovering;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div
	transition:fade
	on:mouseenter={enter}
	on:mouseleave={leave}
	id={"dragon" + dragonProps.id}
	class="col-lg-4"
	align="left"
>
	<FullDragon {dragonProps} />

	{#if menu}
		<CircleMenu {hovering} isApprove={forSale} dragonId={dragonProps.id} />
	{/if}
</div>

<style>

	.col-lg-4 {
		position: relative;
	}


</style>
