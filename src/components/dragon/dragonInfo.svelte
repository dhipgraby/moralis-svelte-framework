<script>
    import OfferInfo from "./OfferInfo.svelte";

    export let dragonProps;
    export let isMarketplace;
</script>

{#if dragonProps.offer}
    {#if isMarketplace}
        <OfferInfo offer={dragonProps.offer} isOwner={dragonProps.isOwner} />
    {:else}
        <div class="row">
            <div class="col-lg-6 col-sm-6" align="left">
                <span class="badge bg-danger text-light">For Sale</span>
            </div>
            <div class="col-lg-6 col-sm-6" align="right">
                <small>Price:</small>
                <p>{dragonProps.offer.price} <i class="fab fa-ethereum" /></p>
            </div>
        </div>
    {/if}
{/if}

<style>
    .col-lg-6,
    .col-sm-6 {
        align-self: center;
    }
</style>
