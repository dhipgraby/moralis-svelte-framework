<script>
	import { onMount } from "svelte";
	import { isApprovedForAll } from "@contracts/methods";
	import { getEth } from "@helpers/main";
	import { Factory } from "@factory/Factory";
	import { getForSaleDetails } from "@contracts/methods";
	import { fade } from "svelte/transition";
	import FullDragon from "../dragon/FullDragon.svelte";
	import CircleMenu from "../dragon/CircleMenu.svelte";

	const FactoryClass = new Factory();

	export let dragonProps;
	export let menu = false;
	let approveForAll;
	
	onMount(async () => {
	//Add single approve
		approveForAll = await isApprovedForAll();
		if (approveForAll) {
				dragonProps.approveForAll = true;
				let offerDetails = await getForSaleDetails(dragonProps.id);

			if (offerDetails != false) {
				dragonProps.offer = offerDetails;
				dragonProps.offer.price = await getEth(offerDetails.priceInWei);
			} 
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
	transition:fade={{ delay: 500 }}
	on:mouseenter={enter}
	on:mouseleave={leave}
	id={"dragon" + dragonProps.id}
	class="col-lg-4"
	align="left"
>
	<FullDragon {dragonProps} />

	{#if menu}
		<CircleMenu {hovering} {dragonProps} />
	{/if}
</div>

<style>
	.col-lg-4 {
		position: relative;
	}
</style>
