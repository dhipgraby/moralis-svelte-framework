<script>
    import { onMount } from "svelte";
    import { user_format, dragonA, dragonB } from "@storage/dragon";
    import {
        getAllYourDragonIds,
        getDetailsAllDragons,
        breed,
    } from "@contracts/methods";
    import { initEventListener } from "@contracts/events";
    //COMPONENTS
    import DragonBox from "./DragonBox.svelte";
    import SelectBox from "./SelectBox.svelte";

    let allDragons;
    let mum_dragon;
    let dad_dragon;
    let displayDragons = false;
    let gender;

    onMount(async () => {
        let dragonsIds = await getAllYourDragonIds();
        allDragons = await getDetailsAllDragons(dragonsIds);
        await initEventListener();
    });

    const dadDragon = dragonA.subscribe((value) => {
        dad_dragon = value;
    });

    const mumDragon = dragonB.subscribe((value) => {
        mum_dragon = value;
    });

    function switchGender() {
        let old_dad = dad_dragon
        dad_dragon = mum_dragon
        mum_dragon = old_dad
        mum_dragon.gender = "mum"
        dad_dragon.gender = "dad"
        return;
    }

    function hideDragons() {
        displayDragons = false;
    }

    function showDragons(dragonGender) {
        displayDragons = true;
        gender = dragonGender;
    }
</script>

<div class="row container" id="dragonGrid">
    {#if mum_dragon.id}
        <DragonBox
            dragonProps={mum_dragon}
            gender={mum_dragon.gender}
            switchBtn={true}
            callback={showDragons}
        />
    {:else}
        <SelectBox callback={showDragons} gender={"mum"} />
    {/if}

    <div class="col-sm-4 pointer p-1">
        <div id="dad" on:click={() => switchGender()}>
            <h1 class="egg"><i class="fas fa-exchange-alt" /></h1>
        </div>
    </div>

    {#if dad_dragon.id}
        <DragonBox
            dragonProps={dad_dragon}
            gender={dad_dragon.gender}
            switchBtn={true}
            callback={showDragons}
        />
    {:else}
        <SelectBox callback={showDragons} gender={"dad"} />
    {/if}
</div>
<div class="col-sm-12">
    {#if mum_dragon.id && dad_dragon.id}
        <button
            class="btn btn-warning text-dark"
            on:click={() => {
                breed(mum_dragon.id, dad_dragon.id);
            }}
            >breed
        </button>
    {/if}
</div>

<div class="row container" id="dragonGrid">
    {#if displayDragons}
        <h1 class="mt-5">Choose {gender}</h1>
        {#if allDragons != undefined}
            {#each allDragons as dragon}
                <DragonBox
                    dragonProps={user_format(dragon)}
                    {gender}
                    hide={hideDragons}
                />
            {/each}
        {/if}
    {/if}
</div>

<style>
    button {
        border-radius: 50px;
        padding-left: 100px;
        padding-right: 100px;
        font-weight: 600;
        letter-spacing: 1.5px;
        font-size: 28px;
        transition: 0.4s;
    }

    button:hover {
        transform: scale(1.06);
    }

    .col-sm-4 {
        align-self: center;
    }

    h1 {
        color: #ffffff;
    }

    .egg {
        color: #ff6d6d;
    }
</style>
