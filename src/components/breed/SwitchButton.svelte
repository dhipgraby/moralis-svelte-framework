<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from 'svelte';

    export  let dragon_gender 
    
    const dispatch = createEventDispatcher();

function changeChoice() {
    dispatch('changechoice', {
        gender: dragon_gender
    });
}

</script>

<div class="maindiv">
    <div on:click={() => changeChoice() } class="menu" align="center">
        <i class="fas fa-retweet" />
    </div>
    <!-- content here -->
</div>

<style>
    .maindiv {
        transition: 0.3s;
    }
</style>
