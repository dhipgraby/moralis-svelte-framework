<script>
    
    import { buyDragon } from "@contracts/methods";
    export let dragonProps;

</script>

<div class="col-lg-8 col-md-12 col-sm-12">

    <div class="dragonInfo">
        <h1>Dragon info</h1>
        <hr />

        <p>Name: </p>
        <p>Level: </p>
        <p>Attributes: </p>

        <hr />
        <h2>Parents:</h2>
        <p>Mom: {dragonProps.mumId}</p>
        <p>Dad: {dragonProps.dadId}</p>
    </div>
    
    <div class="dragonInfo mt-2">
        {#if dragonProps.offer}
        <p>Current price </p>
        <h3>{ dragonProps.offer.price } <i class="fab fa-ethereum"></i></h3>
        {/if}
        
   
        <button on:click={ () => buyDragon(dragonProps.id,dragonProps.offer.priceInWei) } class="btn btn-lg btn-primary">BUY</button>

    </div>

</div>

<style>
    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 28px;
        font-weight: 600;
    }

    .dragonInfo {
        box-shadow: 0px 5px 7px 0px #444444;
        text-align: left;
        background-color: white;
        padding: 20px;
        color: #3f3f3f;
        border-radius: 10px;
    }

    button {
        padding-left: 60px;
        padding-right: 60px;
        letter-spacing: 1.5px;
    }
</style>
