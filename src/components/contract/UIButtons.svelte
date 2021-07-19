<script>

    export let items
     
  function valueById(name){
    let selector = document.getElementById(name)
    if(selector) return selector.value
  }

</script>
<div class="row">


	{#each items as item}
    
    <div class="col-sm-6">
        {#if item.default != null}
        <input type="text" id={item.name} value={item.default} class="form-control"/>
      {:else}
          <p class="ftitle">{item.name}</p>
        {/if}
  
      </div>
  
      <div class="col-sm-6">
        
        <button
          class="btn btn-{ (item.isCall) ? "primary" : "success"   }"
          on:click={async () => item.method(valueById(item.name)) }
          >{item.name}
        </button>
      </div>

	{/each}
</div>

<style>
  .col-sm-6 {
    padding-top: 15px;
  }

  .ftitle {
    font-size: 21px;
    font-weight: 700;
  }
</style>
