<script>
	import { onMount } from "svelte";
	import { getEth } from "@helpers/main";
	import { Factory } from "@factory/Factory";
	import { getForSaleDetails } from "@contracts/methods";
	import { fade } from "svelte/transition";
	import { contractInfo } from "@storage/contract";

	import FullDragon from "../dragon/FullDragon.svelte";
	import OfferBox from "./OfferBox.svelte";

	const FactoryClass = new Factory();

	export let dragonProps;

	onMount(async () => {
		console.log(dragonProps)
		let contractData = await contractInfo();		
		let offerDetails = await getForSaleDetails(dragonProps.id);
		let user = contractData.account;
	
		if (offerDetails != false) {
		
			dragonProps.offer = offerDetails;
			dragonProps.offer.price = await getEth(offerDetails.priceInWei);
			if (
				user.toUpperCase() == offerDetails.sellerAddress.toUpperCase()
			) {
				dragonProps.isOwner = true;
			}
		}

	
		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});
	
	function checkDragon(){
		if(!dragonProps.single){
			document.location ="assets/" + dragonProps.id  	
		}
		return;		
		}
</script>

<div
	on:click={ () => checkDragon()  }
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
