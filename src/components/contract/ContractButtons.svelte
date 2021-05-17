<script>
    import { addressBalance, fundContract } from "@contracts/methods";
    import { contractAddress } from "@storage/contract";
    import { onMount } from "svelte";
    
    let contractBalance;
    
    onMount(async () => {
        contractBalance = addressBalance(contractAddress);
    });
</script>

{#await contractBalance}
    <h2>Loading contract balance...</h2>
{:then balance}
    <h2>Contract balance : {balance} ETH</h2>
{:catch error}
    <h2>{error}</h2>
{/await}

<button class="shadow-lg" on:click={fundContract}>
    <h1>Fund contract</h1>
</button>

<button class="shadow-lg" on:click={() => { contractBalance = addressBalance(contractAddress) }}>
    <h1>Contract Balance</h1>
</button>

<style>
    h1 {
        font-size: 32px;
        margin: 0px;
    }

    button {
        background: #f24141;
        background-image: linear-gradient(to right, #f95300, #f24141);
        color: #ffffff;
        font-weight: 700;
        padding: 10px;
        border-radius: 10px;
        margin-top: 40px;
        min-width: 400px;
        border: none;
    }
</style>
