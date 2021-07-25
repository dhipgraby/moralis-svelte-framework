<script>
    import { onMount } from "svelte";
    import { Factory, defaultDragon } from "@factory/Factory";

    import DragonBox from "./DragonBox.svelte";
    import Attributes from "./Attributes.svelte";
    import BtnFactory from "./BtnFactory.svelte";
    import FactoryFooter from "./FactoryFooter.svelte";

    let FactoryClass = new Factory();

    onMount(() => {       
        FactoryClass.updateSliders(defaultDragon.dna);
    });
</script>

<div style="margin-top: 2vh;margin-bottom: 6vh;">
    <div align="center">
        <h1 class="c-white">Dragon Factory <i class="fas fa-industry" /></h1>
        <p class="c-white">Create uniques Dragons generation "0"</p>
        <span class="badge bg-warning text-dark">First dragons</span>
    </div>
    <div class="row mt-3">
        <DragonBox dragonProps={defaultDragon} menu={false} />

        <Attributes />
    </div>

    <BtnFactory />
</div>

<FactoryFooter />
