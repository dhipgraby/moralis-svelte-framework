<script>
import { onMount } from "svelte";
import { Factory } from "@factory/Factory";
import DragonDna from './DragonDna.svelte'
import DragonBody from './DragonBody.svelte'

const FactoryClass = new Factory();

export let dragonProps

onMount(() => {
    FactoryClass.render(dragonProps, "#kitty" + dragonProps.id);
})

</script>

<div id={"kitty" + dragonProps.id} class="col-lg-4" align="left">
    
<DragonDna />
<DragonBody />

</div>
