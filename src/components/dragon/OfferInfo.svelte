<script>
    import { getEth, shortAddr } from "@helpers/main";
    import { onMount } from "svelte";    
	import BuyBtn from "../dragon/BuyBtn.svelte";

    export let offer;
    let price = offer.priceInWei;
    let owner = shortAddr(offer.sellerAddress);

    onMount(async () => {
        price = await getEth(price);
    });
</script>

<div class="offerContainer">
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



<div class="row mt-2">
    <small>Attributes: </small>
    <div class="col-lg-8 col-sm-8">   
        <div class="attributesContainer">
            <span class="badge bg-dark text-light">Big Eyes</span>
            <span class="badge bg-dark text-light">Tribal Mark</span>
            <span class="badge bg-dark text-light">Animation 1</span></div>
    </div>

    <div class="col-lg-4 col-sm-4 buydiv" align="right">
        <BuyBtn
        dragonId={offer.id}
        price={offer.priceInWei}
    />
    </div>
</div>
</div>

<style>

    .buydiv {
        align-self: center;
    }

    .attributesContainer{
        display:contents;
        padding:10px;
    }

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
