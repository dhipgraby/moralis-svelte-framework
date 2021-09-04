<script>
    import { onMount } from "svelte";
    import { user_format, dragonA, dragonB } from "@storage/dragon";
    import {
        getAllYourDragonIds,
        getDetailsAllDragons,
        breed,
    } from "@contracts/methods";
    import { contractInfo } from "@storage/contract";
    //COMPONENTS
    import BreedBtn from "./BreedBtn.svelte";
    import DragonSelection from "./DragonSelection.svelte";
    import UserDragons from "./UserDragons.svelte";
    import BirthBox from "./birthBox.svelte";

    let allDragons;
    let mum_dragon;
    let dad_dragon;
    let birthData;
    let gender;
    let displayDragons = false;    
    let breedEvent = false;
    

    onMount(async () => {
        let contractData = await contractInfo();
        let dragonsIds = await getAllYourDragonIds();
        allDragons = await getDetailsAllDragons(dragonsIds);
        await contractData.interfaces.dragon.events
            .Birth()
            .once("data", (event) => {
                birthData = event.returnValues;
                birthData.tokenId = birthData.babyDragonId
                breedEvent = true;
            })
            .on("error", console.error);
    });

    const dadDragon = dragonA.subscribe((value) => {
        dad_dragon = value;
    });

    const mumDragon = dragonB.subscribe((value) => {
        mum_dragon = value;
    });

    function switchGender() {
        let old_dad = dad_dragon;
        dad_dragon = mum_dragon;
        mum_dragon = old_dad;
        mum_dragon.gender = "mum";
        dad_dragon.gender = "dad";
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

{#if breedEvent}
    <BirthBox {birthData} {user_format} />
{:else}
    <DragonSelection {mum_dragon} {dad_dragon} {showDragons} {switchGender} />
    <BreedBtn {mum_dragon} {dad_dragon} {breed} />

    <UserDragons
        {user_format}
        {hideDragons}
        {displayDragons}
        {allDragons}
        {gender}
    />
{/if}
