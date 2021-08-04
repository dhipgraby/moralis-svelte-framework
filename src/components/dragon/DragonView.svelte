<script>
    
import DragonBox from '../factory/DragonBox.svelte'
import OfferBox from '../marketplace/OfferBox.svelte'


export let dragonProps


</script>

<div class="row">
    
    <DragonBox {dragonProps} />
    <OfferBox {dragonProps} />

</div>