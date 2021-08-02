<script>
    import DragonDna from "../factory/DragonDna.svelte";
	import DragonBody from "../factory/DragonBody.svelte";
    import DragonInfo from "../dragon/dragonInfo.svelte";

    export let dragonProps

</script>

<DragonDna />

<div class="dragonContainer light-b-shadow">
    <DragonBody />

    <DragonInfo {dragonProps} />
</div>