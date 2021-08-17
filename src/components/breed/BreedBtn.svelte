<script>
    export let breed;
    export let mum_dragon;
    export let dad_dragon;
</script>

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
</style>
