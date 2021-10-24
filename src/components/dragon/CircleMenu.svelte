<script>
import { onMount } from "svelte";
import SellOption from "./SellOption.svelte"


    export let hovering;
    export let dragonProps;
   
    let active = false;

    onMount(()=>{
        var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    })

</script>

<div class="{hovering ? 'show' : 'hide'} maindiv">

<div
    on:click={() => {
        active = active == true ? false : true;
    }}
    class="menu"
    align="center"
>
    <i class="fas fa-cog" />
</div>
    <!-- content here -->

    <div class={ active == true ? "d-block" : "d-hide"}>
        <a href="assets/{dragonProps.id}"><div class="menu firstItem" align="center">
          <i class="far fa-eye" /> 
        </div></a> 


        <div class="menu secondItem" align="center"  data-bs-toggle="modal" data-bs-target="#dragonModal{dragonProps.id}" >
            <i class="fas fa-dollar-sign" data-bs-html="true"  data-trigger="click" data-bs-toggle="tooltip" data-bs-placement="right" title="<b>Sell</b>"/>
        </div>
       
    </div>
</div>

<SellOption {dragonProps} />
   


<style>

    a {
        color:black;
    }

    .maindiv {
        transition: 0.3s;

     }
    .d-block {
        display: block;
    }

    .d-hide {
        display: none;
    }

    .show {
        opacity: 1;
    }

    .hide {
        opacity: 0;
    }

</style>
