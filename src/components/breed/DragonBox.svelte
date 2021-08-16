<script>
	import { afterUpdate, onMount } from "svelte";
	import { update_current_dragon } from "@storage/dragon";
	import { Factory } from "@factory/Factory";
	import { fade } from "svelte/transition";
	import FullDragon from "../dragon/FullDragon.svelte";
	import SwitchButton from "./SwitchButton.svelte";

	const FactoryClass = new Factory();

	export let dragonProps;
	export let gender;
	export let switchBtn = false;
	export let callback = null;
	export let hide = null;

	function chooseDragon(){
		update_current_dragon(dragonProps, gender)
		if(hide != null) hide()
	}

	afterUpdate(async () => {
		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});

	onMount(async () => {
		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});

</script>

<div
	transition:fade={{ delay: 500 }}
	on:click={() => chooseDragon() }
	id={"dragon" + dragonProps.id}
	class="col-lg-4 pointer"
	align="left"
>
	<FullDragon {dragonProps} />
	{#if switchBtn}
		<SwitchButton {gender} {callback}/>
	{/if}

</div>

<style>
	.col-lg-4 {
		position: relative;
	}
</style>
