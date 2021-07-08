<script>
  import { contractBalance, addressBalance } from "@contracts/methods";
  import { contractInfo, balances } from "@storage/contract";
  import { onMount } from "svelte";
  import { shortAddr } from "@helpers/main";
  import BetBox from "./BetBox.svelte";
  import FundBox from "./FundBox.svelte";
  

  let currentUser;
  let userBalance;
  let dappBalance;

  onMount(async () => {
    currentUser = shortAddr((await contractInfo()).account)
    await contractBalance();
  });

  const unsubscribe = balances.subscribe((value) => {
    dappBalance = value.contract;
    userBalance = value.user;
  });

</script>

<FundBox {dappBalance} />

<div class="mt-4 shadow-lg p-3" align="left">
  <h5>User: {currentUser}</h5>
  <h5>Balance: {userBalance}</h5>

  <BetBox />
</div>

<style>
  h5 {
    margin-bottom: 0px;
    margin-top: 10px;
  }
</style>
