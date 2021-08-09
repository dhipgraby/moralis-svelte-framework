<script>
    import { getEth, shortAddr } from "@helpers/main";
    import { onMount } from "svelte";

    export let offer;
    export let isOwner = false;
    let owner = shortAddr(offer.sellerAddress);

</script>

    <div class="row">
        <div class="col-lg-6 col-sm-6">
            {#if isOwner}
                 <span class="badge badge-warning">Owned</span>
            {:else}
                 <small>Owner:</small>
            <p>{owner}</p>
            {/if}
       
        </div>

        <div class="col-lg-6 col-sm-6" align="right">
            <small>Price:</small>
            <p>{offer.price} <i class="fab fa-ethereum" /></p>
        </div>
    </div>

<style>

    .badge-warning {
        background-color:#ffc107;
        color:#000000
    }
 
 .col-lg-6, .col-sm-6 {
     align-self: center;
 }  
    p {
        font-weight: 600;
        margin: 0;
        margin-bottom: 5px;
    }

    p,
    small {
        color: #000000;
    }
</style>
