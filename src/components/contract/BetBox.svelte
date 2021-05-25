<script>
    import { addressBalance, placeBet } from "@contracts/methods";

    let amount = 0.01;
 
  </script>

  <div class="row" align="center">
    <div class="col-sm-6" align="right">
      <button
        class="shadow-lg red-button"
        on:click={() => {
          placeBet(1, amount);
        }}>Bet Hi! <i class="fas fa-chevron-up" /> <small>(51)</small></button
      >
    </div>
    <div class="col-sm-6 " align="left">
      <button
        class="shadow-lg red-button"
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
        <button class="shadow-lg red-button" disabled>Place bet</button>
        <input type="number" bind:value={amount} class="form-control" />
      </div>
    </div>
  </div>