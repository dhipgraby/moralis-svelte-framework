<script>
    import DragonDna from "../factory/DragonDna.svelte";
	import DragonBody from "../factory/DragonBody.svelte";
    import DragonInfo from "../dragon/dragonInfo.svelte";

    export let dragonProps
    export let isMarketplace = false

</script>


{#if dragonProps.displayDna}
    <DragonDna />   
{/if}


<div class="dragonContainer light-b-shadow">
    <DragonBody />

    <!-- Dragon Info -->
    <div class="offerContainer">
        <div class="custom-shape-divider-top">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    class="shape-fill"
                />
            </svg>
        </div>
    <DragonInfo {dragonProps} {isMarketplace} />
    </div>    

</div>


<style>

    .custom-shape-divider-top {
        position: absolute;
        top: -90px;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-top svg {
        position: relative;
        display: block;
        width: calc(100% + 150px);
        height: 96px;
    }

    .custom-shape-divider-top .shape-fill {
        fill: #ffffff;
    }
</style>
