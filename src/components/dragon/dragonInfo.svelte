<script>

import OfferInfo from "../dragon/OfferInfo.svelte";

export let dragonProps

</script>

<div class="offerContainer">
    <div class="custom-shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
    </div>

    {#if dragonProps.offer}
        <OfferInfo offer={dragonProps.offer} />
    {/if}
    
    <div class="attributesContainer">
        <small>Attributes: </small>
        <br>
        <span class="badge bg-dark text-light">Big Eyes</span>
        <span class="badge bg-dark text-light">Tribal Mark</span>
        <span class="badge bg-dark text-light">Animation 1</span>
    </div>

</div>
<style>
.attributesContainer {
    margin-top: 15px;
    display: contents;
    padding: 10px;
}

.custom-shape-divider-top {
position: absolute;
top: -90px;
left: 0;
width: 100%;
overflow: hidden;
line-height: 0;

}

.custom-shape-divider-top svg {
position: relative;
display: block;
width: calc(100% + 150px);
height: 96px;
}

.custom-shape-divider-top .shape-fill {
fill: #FFFFFF;
}
</style>