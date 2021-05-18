<script>
  import { addressBalance, fundContract, placeBet } from "@contracts/methods";
  import { contractAddress } from "@storage/contract";
  import { onMount } from "svelte";

  let contractBalance;
  let amount = 0.01;

  onMount(async () => {
    contractBalance = addressBalance(contractAddress);
  });
</script>

<div class="row shadow-lg p-3">
  <div class="col-md-6" align="left">
    <div id="balanceBox" align="left">
      {#await contractBalance}
        <h5>Loading contract balance...</h5>
      {:then balance}
        <h5>Contract balance : {balance} ETH</h5>
      {:catch error}
        <h5>{error}</h5>
      {/await}
    </div>
  </div>
  <div class="col-md-6" align="right">
    <button class="shadow-lg" on:click={fundContract}> Fund contract! </button>
  </div>
</div>

<div class="mt-4 shadow-lg p-3" align="left">
  <h5>User:</h5>
  <h5>Balance:</h5>

  <div class="row" align="center">
    <div class="col-sm-6" align="right">
      <button
        class="shadow-lg"
        on:click={() => {
          placeBet(1, amount);
        }}>Bet Hi! <i class="fas fa-chevron-up" /> <small>(51)</small></button
      >
    </div>
    <div class="col-sm-6 " align="left">
      <button
        class="shadow-lg"
        on:click={() => {
          placeBet(2, amount);
        }}
        >Bet Low! <i class="fas fa-chevron-down" />
        <small>(49)</small></button
      >
    </div>
    <div>
      <div class="mt-3" align="left">
        <b><i class="fas fa-coins" /> Amount in ethereum</b>
      </div>
      <div class="input-group mt-3">
        <button class="shadow-lg" disabled>Place bet</button>
        <input type="number" bind:value={amount} class="form-control" />
      </div>
    </div>
  </div>
</div>

<style>

  .row {

    margin:0px;

  }
  
  div.shadow-lg {
    border-radius: 10px;
  }

  #balanceBox {
    border-radius: 10px;
  }

  h5 {
    margin-bottom: 0px;
    margin-top: 10px;
  }

  button {
    background: #f24141;
    background-image: linear-gradient(to right, #f95300, #f24141);
    color: #ffffff;
    font-weight: 700;
    padding: 10px;
    border-radius: 10px;
    border: none;
  }
</style>
