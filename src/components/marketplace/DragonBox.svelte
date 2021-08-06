<script>
	import { onMount, createEventDispatcher } from "svelte";
	import { getEth } from "@helpers/main";
	import { Factory } from "@factory/Factory";
	import { getForSaleDetails } from "@contracts/methods";
	import { fade } from "svelte/transition";
	import { contractInfo } from "@storage/contract";
	import OfferBox from "./OfferBox.svelte";
	import FullDragon from "../dragon/FullDragon.svelte";

	const FactoryClass = new Factory();

	export let dragonProps;

	const dispatch = createEventDispatcher();

	onMount(async () => {
		let contractData = await contractInfo();
		let user = contractData.account;
		let offerDetails = await getForSaleDetails(dragonProps.id);

		if (offerDetails != false) {
			dragonProps.offer = offerDetails;
			dragonProps.offer.price = await getEth(offerDetails.priceInWei);
		}

		if (user.toUpperCase() == offerDetails.sellerAddress.toUpperCase()) {
			dragonProps.isOwner = true;
		}

		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});

	function checkDragon() {
		dispatch("checkDragon", {
			dragon: dragonProps,		
		});
	}

</script>

<div
	on:click={() => checkDragon()}
	transition:fade
	id={"dragon" + dragonProps.id}
	class="col-lg-4 pointer"
	align="left"
>
	<FullDragon {dragonProps} isMarketplace={true} />
</div>

{#if dragonProps.displayOffer}
	<OfferBox {dragonProps} />
{/if}

<style>
	.col-lg-4 {
		position: relative;
	}
</style>
