<script>

import { buyDragon } from "@contracts/methods";

export let price;
export let dragonId;

</script>


<button on:click={()=>{ buyDragon(dragonId,price) } } class="btn btn-warning text-dark"><p>BUY</p></button>

<style>

p {
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0;
}


</style>