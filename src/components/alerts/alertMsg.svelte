<script>
  import { fly } from "svelte/transition";
  export let alertType = "info";
  export let content = "This is a empty alert, just close it...";
  export let show = true;
  
</script>

{#if show}
  <div id="alertDiv">
    <div
      class="alert alert-{alertType} alert-dismissible fade show"
      role="alert"
      transition:fly={{ y: 100, duration: 700 }}
    >
      <p>{@html content}</p>

      <button
        type="button"
        class="btn-close"
        on:click={() => {
          show = false;
        }}
      />
    </div>
  </div>
{/if}

<style>

#alertDiv {

position:fixed;
bottom: 10px;
width: fit-content;

}


  p {
    margin: 0;
  }
</style>
