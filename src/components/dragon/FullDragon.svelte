<script>
    import DragonDna from "../factory/DragonDna.svelte";
    import DragonBody from "../factory/DragonBody.svelte";
    import ShapeDivider from "../factory/ShapeDivider.svelte";
    import DragonInfo from "./DragonInfo.svelte";
    import Attributes from "./Attributes.svelte";

    export let dragonProps;
    export let isMarketplace = false;
</script>

{#if dragonProps.displayDna}
    <DragonDna />
{/if}

<div class="dragonContainer light-b-shadow">
    <DragonBody />

    <!-- Dragon Info -->
    <div class="offerContainer">
        <ShapeDivider />

        {#if dragonProps.displayInfo}
            <DragonInfo {dragonProps} {isMarketplace} />
        {/if}

        {#if dragonProps.displayAttributes}
            <Attributes />
        {/if}
    </div>
</div>
