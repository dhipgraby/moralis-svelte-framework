<script>

    
  function cleanConsole(){
    document.getElementById('contractResult').innerHTML = ""
  }

</script>
  <!-- PRE FOR RETURNED CONTRACT DATA -->
  <div class="col-sm-4" align="left">

    <button class="btn btn-dark mb-2" on:click={ () => cleanConsole() }>Clear console</button>

    <pre id="contractResult" />

  </div>
