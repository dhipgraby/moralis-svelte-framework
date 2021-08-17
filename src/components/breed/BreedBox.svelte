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
    import BreedBtn from "./BreedBtn.svelte";
    import DragonSelection from "./DragonSelection.svelte";
    import UserDragons from "./UserDragons.svelte";

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

<DragonSelection {mum_dragon} {dad_dragon} {showDragons} {switchGender} />

<BreedBtn {mum_dragon} {dad_dragon} {breed} />

<UserDragons
    {user_format}
    {hideDragons}
    {displayDragons}
    {allDragons}
    {gender}
/>
