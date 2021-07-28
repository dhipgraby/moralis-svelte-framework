<script>
import { onMount } from "svelte";
import { Factory } from "@factory/Factory";
import DragonDna from './DragonDna.svelte'
import DragonBody from './DragonBody.svelte'
import CircleMenu from "../dragon/CircleMenu.svelte";
import OfferInfo from "../dragon/OfferInfo.svelte";
import { getForSaleDetails } from "@contracts/methods";

const FactoryClass = new Factory();

export let dragonProps
export let menu;
export let isApprove;

onMount( async () => {
	
	if(isApprove){
		let isForSale = await getForSaleDetails(dragonProps.id)
		if(isForSale != false)  dragonProps.offer = isForSale 			
	}

    FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
})

let hovering;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}

</script>

<div on:mouseenter={enter} on:mouseleave={leave} id={"dragon" + dragonProps.id} class="col-lg-4" align="left">
    
<DragonDna />
<DragonBody />
{#if dragonProps.offer}
<OfferInfo offer={dragonProps.offer} />
{/if}

{#if menu}
	<CircleMenu {hovering} {isApprove} dragonId={ dragonProps.id } />
{/if}

</div>

<style>
    .col-lg-4 {
        position: relative;
    }
</style>
