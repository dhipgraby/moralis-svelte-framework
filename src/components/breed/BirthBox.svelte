<script>
      import DragonBox from "./DragonBox.svelte";
      
      export let birthData; 
      export let user_format;

      let dragonProps = user_format(birthData)
      let gender = "mum"; 

</script>

<div class="container">
    <div class="row">
      <div class="col-lg-4"></div>

      <DragonBox {dragonProps} {gender} goTo={true} />

      <div class="col-lg-4"></div>
    </div>
</div>

<style>
  
</style>
