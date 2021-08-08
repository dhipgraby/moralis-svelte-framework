<script>
    import OfferInfo from "./OfferInfo.svelte";

    export let dragonProps;
    export let isMarketplace;
</script>

        {#if dragonProps.offer}
            {#if isMarketplace}
                <OfferInfo
                    offer={dragonProps.offer}
                    isOwner={dragonProps.isOwner}
                />
            {:else}
                <div class="mb-2">
                    <span class="badge bg-danger text-light">For Sale</span>
                </div>
            {/if}
        {/if}
