<script>

    import { createDragon } from "@contracts/methods";

    const create = async () => {
        let getDragonDna = FactoryClass.getDna();
        await createDragon(getDragonDna);
    };
</script>

<!-- Button Controls -->
<div class="row">
    <div class="col-sm-5 m-2">
        <button
            type="button"
            class="btn btn-primary mr-1"
            onclick="getRandomKittie()">Get Random Kittie</button
        >
        <button
            type="button"
            class="btn btn-primary"
            onclick="getDefaultKittie()">Get Default Kittie</button
        >
    </div>
    <div class="col-sm-6 m-2" align="right">
        <button
            type="button"
            class="btn btn-success"
            on:click={async () => {
                await create();
            }}>Create Kittie</button
        >
    </div>
    <br />
    <div
        id="kittyCreation"
        class="alert alert-success"
        role="alert"
        style="display:none"
    />
</div>
