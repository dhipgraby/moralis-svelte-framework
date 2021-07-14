<script>
  import { allFunctions } from "@contracts/testMethods";
  import UIButtons from "./UIButtons.svelte";
  import Console from "./Console.svelte";

  let items = allFunctions;
</script>

<div class="row mt-5 container">
  <h2 class="mb-5">Contract UI Testing Interface</h2>

  <div class="colors mb-5" align="center">
    <p class="green">Send func. <i class="fas fa-circle" /></p>
    <p class="blue">Call func. <i class="fas fa-circle" /></p>
  </div>

  <div class="col-sm-8">
    <UIButtons {items} />
  </div>

  <Console />
</div>

<style>
  .colors {
    display: inline-flex;
    justify-content: center;
  }

  p {
    font-size: 18px;
    font-weight: 600;
  }
  .green {
    color: #157347;
  }

  .blue {
    color: #0b5ed7;
    margin-left: 20px;
  }
</style>
