<script>
    import { onMount } from "svelte";
    import { Factory } from "@factory/Factory";
    import {
        user_format,
        dragonA,        
        dragonB,        
    } from "@storage/dragon";
    import {
        getAllYourDragonIds,
        getDetailsAllDragons,
    } from "@contracts/methods";
    //COMPONENTS
    import DragonBox from "../components/breed/DragonBox.svelte";
    import CssFiles from "../components/factory/CssFiles.svelte";
    import Container from "../components/Container.svelte";

    const FactoryClass = new Factory();
    let allDragons;
    let mum_dragon;
    let dad_dragon;
    let displayDragons = false;
    let gender;

    onMount(async () => {
        let dragonsIds = await getAllYourDragonIds();
        allDragons = await getDetailsAllDragons(dragonsIds);
    });

    const mumDragon = dragonA.subscribe((value) => {
        // displayDragons = false
        mum_dragon = value;
    });
    
    const dadDragon = dragonB.subscribe((value) => {
        displayDragons = false
        dad_dragon = value;
    });

    function showDragons(dragonGender) {
        displayDragons = true;
        gender = dragonGender;
    }

    function switchGender() {
        return;
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
        {#if mum_dragon.id}
            <DragonBox
                dragonProps={mum_dragon}
                gender={mum_dragon.gender}
            />
        {:else}
            <div class="col-sm-5 p-1">
                <div
                    class="eggContainer pointer"
                    id="mum"
                    on:click={() => showDragons("mum")}
                >
                    <h1 class="egg"><i class="fas fa-egg" /></h1>
                    <h3>Select a Dragon</h3>
                </div>
            </div>
        {/if}

        <div class="col-sm-2 p-1">
            <div id="dad" on:click={() => switchGender("dad")}>
                <h1 class="egg"><i class="fas fa-exchange-alt" /></h1>
            </div>
        </div>

        {#if dad_dragon.id}
            <DragonBox
                dragonProps={dad_dragon}
                gender={dad_dragon.gender}
            />
        {:else}
            <div class="col-sm-5 p-1">
                <div
                    class="eggContainer pointer"
                    id="mum"
                    on:click={() => showDragons("dad")}
                >
                    <h1 class="egg"><i class="fas fa-egg" /></h1>
                    <h3>Select a Dragon</h3>
                </div>
            </div>
        {/if}

        {#if displayDragons}
            <h1 class="mt-5">Choose {gender}</h1>
            {#if allDragons != undefined}
                {#each allDragons as dragon}
                    <DragonBox dragonProps={user_format(dragon)} {gender} />
                {/each}
            {/if}
        {/if}
    </div>
</Container>

<style>
    .col-sm-2 {
        align-self: center;
    }

    .eggContainer {
        border-radius: 10px;
        background: #ffffff;
        padding: 70px;
        vertical-align: middle;
        box-shadow: 0px 5px 7px 0px #444444;
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
