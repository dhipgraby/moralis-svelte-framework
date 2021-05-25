<!-- Modal -->
<script>

export let id;
export let submit_name;
export let title;
export let content;
export let callback;
export let buttonName;

</script>

<button type="button" class="purple-button" data-bs-toggle="modal" data-bs-target="#{id}">
  { buttonName }
</button>

<div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{ title}</h5>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot>
          { content}
        </slot>        
      </div>
      <div class="modal-footer">
        <button  class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button on:click={ callback } class="red-button" data-bs-dismiss="modal">{ submit_name}</button>
      </div>
    </div>
  </div>
</div>