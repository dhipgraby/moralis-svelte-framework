<script>
	import { onMount } from "svelte";
	import { Factory } from "@factory/Factory";
	import { getForSaleDetails } from "@contracts/methods";
	import { fade } from "svelte/transition";
	import { contractInfo } from "@storage/contract";
	import FullDragon from "../dragon/FullDragon.svelte"

	const FactoryClass = new Factory();

	export let dragonProps;	

	onMount(async () => {
	
			let contractData = await contractInfo()
			let user = contractData.account			
			let offerDetails = await getForSaleDetails(dragonProps.id);
			if (offerDetails != false) dragonProps.offer = offerDetails;
			if(user.toUpperCase() == offerDetails.sellerAddress.toUpperCase()){
				dragonProps.isOwner = true;
			} 

		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});

</script>

<div
	transition:fade
	id={"dragon" + dragonProps.id}
	class="col-lg-4 pointer"
	align="left"
>

	<FullDragon {dragonProps} isMarketplace={true} />

</div>

<style>
	.col-lg-4 {
		position: relative;
	}

</style>
