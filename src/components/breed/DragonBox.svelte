<script>
	import { afterUpdate, beforeUpdate, onMount } from "svelte";
	import { update_current_dragon } from "@storage/dragon";
	import { Factory } from "@factory/Factory";
	import { fade } from "svelte/transition";
	import FullDragon from "../dragon/FullDragon.svelte";

	const FactoryClass = new Factory();
	
	export let dragonProps;
	export let gender;

	console.log(gender)

	afterUpdate(async () => {		
		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});


	onMount(async () => {		
		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});

</script>

<div
	transition:fade={{ delay: 500 }}
    on:click={ () => update_current_dragon(dragonProps,gender) }
	id={"dragon" + dragonProps.id}
	class="col-lg-4 pointer"
	align="left"
>
	<FullDragon {dragonProps} />

</div>

<style>
	.col-lg-4 {
		position: relative;
	}
</style>
