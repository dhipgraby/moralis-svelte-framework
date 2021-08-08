<script>
    import { onMount } from "svelte";
    import { user_format } from "@storage/dragon";
    import {
        getAllYourDragonIds,
        getDetailsAllDragons,
    } from "@contracts/methods";
    //COMPONENTS
    import DragonBox from "../components/factory/DragonBox.svelte";
    import CssFiles from "../components/factory/CssFiles.svelte";
    import Container from "../components/Container.svelte";

    let allDragons;
    let displayDragons = false;

    onMount(async () => {
        let dragonsIds = await getAllYourDragonIds();
        allDragons = await getDetailsAllDragons(dragonsIds);
    });

    function showDragons(){
        displayDragons = true
    }

</script>

<svelte:head>
    <title>Breed Dragons</title>
    <CssFiles />
</svelte:head>

<Container>
    <h1 class="egg"><i class="fas fa-egg" /></h1>
    <h1>Breeding</h1>

    <div class="row container" id="dragonGrid">
        {#if displayDragons}
            {#if allDragons != undefined}
                {#each allDragons as dragon}
                    <DragonBox dragonProps={user_format(dragon)} />
                {/each}
            {/if}
        {:else}
            <div class="col-sm-6 p-1">
                <div class="eggContainer pointer" on:click={ () => showDragons() }>
                    <h1>Select a Dragon</h1>
                </div>
            </div>

            <div class="col-sm-6 p-1">
                <div class="eggContainer pointer" on:click={ () => showDragons() } >
                    <h1>Select a Dragon</h1>
                </div>
            </div>
        {/if}
    </div>
</Container>

<style>
    .eggContainer {
        background: #ffffff;
        padding: 50px;
    }

    .eggContainer h1 {
        color: #444444;
    }

    h1 {
        color: #ffffff;
    }

    .egg {
        color: #ff6d6d;
    }
</style>
