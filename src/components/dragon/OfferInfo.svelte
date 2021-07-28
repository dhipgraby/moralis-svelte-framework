<script>

import { getEth,shortAddr } from "@helpers/main";
import { onMount } from "svelte";

export let offer
let price = offer.priceInWei
let owner = shortAddr(offer.sellerAddress)


onMount(async() => {
    
    price = await getEth(price);
})


</script>

<p>{ price }  <i class='fab fa-ethereum'></i></p>

<p>{ owner }</p>

<style>

p {
color:white;
}

</style>