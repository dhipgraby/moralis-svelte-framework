
<script>
import { fly } from 'svelte/transition';
export let alertType = "info";
export let content = "This is a empty alert, just close it...";
export let show = true0

</script>

{#if show}
   
<div class="alert alert-{alertType} alert-dismissible fade show" role="alert" transition:fly="{{ y: 100, duration: 2000 }}" >
  <p>{@html content}</p>
 <button type="button" class="btn-close" on:click={()=>{ show = false }}></button>
</div>

{/if}

  <style>
    p { margin: 0;}
  </style>