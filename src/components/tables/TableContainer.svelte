<script>
  import { onMount } from "svelte";
  import { bornDragons } from "@contracts/CloudFunctions";

  let dragons = []

  onMount(async ()=>{

    dragons = await bornDragons()
    console.log(dragons)

  })

</script>
