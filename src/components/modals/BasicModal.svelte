<!-- Modal -->
<script>

export let id;
export let submit_name;
export let title;
export let callback;

</script>

<div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{@html title}</h5>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot>
 
        </slot>        
      </div>
      <div class="modal-footer">
        <button  class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {#if callback != false}
          <button on:click={ callback } class="btn btn-success" data-bs-dismiss="modal">{ submit_name}</button>
        {/if}
      
      </div>
    </div>
  </div>
</div>