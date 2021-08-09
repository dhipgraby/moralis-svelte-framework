<script>
	import { onMount } from "svelte";
	import { getEth } from "@helpers/main";
	import { Factory } from "@factory/Factory";
	import { getForSaleDetails } from "@contracts/methods";
	import { fade } from "svelte/transition";
	import FullDragon from "../dragon/FullDragon.svelte";
	import CircleMenu from "../dragon/CircleMenu.svelte";

	const FactoryClass = new Factory();

	export let dragonProps;
	export let menu = false;
	export let forSale = false;

	onMount(async () => {
		if (forSale) {
			let offerDetails = await getForSaleDetails(dragonProps.id);

			dragonProps.isOwner = true;
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
		<CircleMenu {hovering} isApprove={forSale} dragonId={dragonProps.id} />
	{/if}
</div>

<style>
	.col-lg-4 {
		position: relative;
	}
</style>
