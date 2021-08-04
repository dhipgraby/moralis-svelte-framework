<script>
    import OfferInfo from "../dragon/OfferInfo.svelte";

    export let dragonProps;
    export let isMarketplace;
</script>



    {#if dragonProps.displayInfo}
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

        {#if dragonProps.displayAttributes}
            <div class="attributesContainer">
                <small>Attributes: </small>
                <br />
                <span class="badge bg-dark text-light">Big Eyes</span>
                <span class="badge bg-dark text-light">Tribal Mark</span>
                <span class="badge bg-dark text-light">Animation 1</span>
            </div>
        {/if}
    {/if}
