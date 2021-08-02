<script>
	import { onMount } from "svelte";
	import { Factory } from "@factory/Factory";
	import { getForSaleDetails } from "@contracts/methods";
	import DragonDna from "./DragonDna.svelte";
	import DragonBody from "./DragonBody.svelte";
	import CircleMenu from "../dragon/CircleMenu.svelte";
	import OfferInfo from "../dragon/OfferInfo.svelte";
	import BuyBtn from "../dragon/BuyBtn.svelte";

	const FactoryClass = new Factory();

	export let dragonProps;
	export let menu = false;
	export let forSale = false;

	onMount(async () => {
		if (forSale) {
			let offerDetails = await getForSaleDetails(dragonProps.id);
			if (offerDetails != false) dragonProps.offer = offerDetails;
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
	on:mouseenter={enter}
	on:mouseleave={leave}
	id={"dragon" + dragonProps.id}
	class="col-lg-4"
	align="left"
>
	<DragonDna />
	<div class="dragonContainer light-b-shadow">
		<DragonBody />

		{#if dragonProps.offer}
			<div class="offerContainer">
				<OfferInfo offer={dragonProps.offer} />
				<BuyBtn
					dragonId={dragonProps.id}
					price={dragonProps.offer.priceInWei}
				/>
			</div>
		{/if}
	</div>

	{#if menu}
		<CircleMenu {hovering} {forSale} dragonId={dragonProps.id} />
	{/if}
</div>

<style>
	.col-lg-4 {
		position: relative;
	}
</style>
