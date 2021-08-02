<script>
    import { getEth, shortAddr } from "@helpers/main";
    import { onMount } from "svelte";

    export let offer;
    let price = offer.priceInWei;
    let owner = shortAddr(offer.sellerAddress);

    onMount(async () => {
        price = await getEth(price);
    });
</script>

<div class="row">
    <div class="col-lg-6 col-sm-6">
        <small>Owner:</small>
        <p>{owner}</p>
    </div>

    <div class="col-lg-6 col-sm-6" align="right">
        <small>Price:</small>
        <p>{price} <i class="fab fa-ethereum" /></p>
    </div>
</div>

<div>
    <small>Attributes: </small>
</div>

<style>

    p {
        font-weight: 600;
        margin:0;
        margin-bottom: 5px;
    }

    p,
    small {
        color: #000000;
    }
</style>
