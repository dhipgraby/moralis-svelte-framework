<script>
import { onMount } from "svelte";
import { Factory } from "@factory/Factory";
import DragonDna from './DragonDna.svelte'
import DragonBody from './DragonBody.svelte'
import CircleMenu from "../dragon/CircleMenu.svelte";

const FactoryClass = new Factory();

export let dragonProps
export let menu;
export let isApprove;

onMount(() => {
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
{#if menu}
	<CircleMenu {hovering} {isApprove} dragonId={ dragonProps.id } />
{/if}

</div>

<style>
    .col-lg-4 {
        position: relative;
    }
</style>
