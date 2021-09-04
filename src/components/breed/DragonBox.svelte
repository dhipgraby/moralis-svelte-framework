<script>
	import { afterUpdate, onMount } from "svelte";
	import { update_current_dragon } from "@storage/dragon";
	import { Factory } from "@factory/Factory";
	import FullDragon from "../dragon/FullDragon.svelte";
	import SwitchButton from "./SwitchButton.svelte";

	const FactoryClass = new Factory();

	export let dragonProps;
	export let gender;
	export let switchBtn = false;
	export let callback = null;
	export let goTo = null;
	export let hide = null;

	function chooseDragon() {
		if (hide != null) {
			hide();
			update_current_dragon(dragonProps, gender);
		}

		if (goTo != null) {
			document.location = "assets/" + dragonProps.id;
		}
		return;
	}

	afterUpdate(async () => {
		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});

	onMount(async () => {
		FactoryClass.render(dragonProps, "#dragon" + dragonProps.id);
	});
</script>

<div
	on:click={() => chooseDragon()}
	id={"dragon" + dragonProps.id}
	class="col-lg-4 pointer"
	align="left"
>
	<FullDragon {dragonProps} />
	{#if switchBtn}
		<SwitchButton {gender} {callback} />
	{/if}

	{#if goTo != null}
		<button
			on:click={() => chooseDragon()}
			class="btn btn-warning text-dark">GO TO INSPECT!</button
		>
	{/if}
</div>

<style>
	
	.col-lg-4 {
		position: relative;
	}

	button {
		border-radius: 50px;
		padding-left: 100px;
		padding-right: 100px;
		font-weight: 600;
		letter-spacing: 1.5px;
		white-space: nowrap;
		font-size: 28px;
		transition: 0.4s;
	}

	button:hover {
		transform: scale(1.06);
	}
</style>
