<script>
  import BasicModal from "../modals/BasicModal.svelte";
  import { fundContract } from "@contracts/methods";


  let FundAmount = 0.1;
  export let dappBalance;

  const modal_props = {
    id: "fundBox",
    submit_name: "Confirm funding",
    title: "Fund Dice smart contract ",
    content: "By funding this smart contract you are supporting the community",    
    buttonName: "Fund contract!",
  };
</script>

<div class="row shadow-lg p-3">
  <div class="col-md-6" align="left">
    <div id="balanceBox" align="left">
      {#await dappBalance}
        <h5>Loading contract balance...</h5>
      {:then balance}
        <h5>Contract balance : {balance} ETH</h5>
      {:catch error}
        <h5>{error}</h5>
      {/await}
    </div>
  </div>
  <div class="col-md-6" align="right">
    <BasicModal {...modal_props} callback={ () => { fundContract(FundAmount) } }>
        <div align="center">
          <p>
            Enter the amount you want to fund in eth.<br />
            Minimum to fund is 0.01 eth.
          </p>
          <input type="number" bind:value={FundAmount} class="form-control" />
        </div>
      </BasicModal>
  </div>
</div>

<style>

  .row {
    margin: 0px;
  }

 
  #balanceBox {
    border-radius: 10px;
  }

  h5 {
    margin-bottom: 0px;
    margin-top: 10px;
  }
</style>
