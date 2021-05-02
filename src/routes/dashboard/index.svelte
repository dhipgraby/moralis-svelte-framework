
<script>

    import Alert from "../../components/alerts/alertMsg.svelte";
    import { fade } from "svelte/transition";

    // export let userData;

    let alertData = {};
    let alert = false;

</script>

{#if alert}
    <div transition:fade class="pt-3">
        <Alert {...alertData} show={true} />
    </div>
{/if}

<div class="mb-4" align="center">
    <h1>Dashboard</h1>

</div>
