<script>

export let games;

</script>

<table class="table table-responsive">
    <tr>
      <td><h3>Game Id</h3></td>
      <td><h3>Lucky number</h3></td>
      <td><h3>Amount</h3></td>
      <td><h3>Profit/Loss</h3></td>
      <td><h3>Date</h3></td>
    </tr>
  
    {#if games.length}
        {#each games as { gameId, number, amount,profitLoss, date } }
          <tr>
            <td><p>{gameId}</p></td>
            <td><p>{number}</p></td>
            <td><p>{amount} <i class="fab fa-ethereum"></i></p></td>
            <td><p>{profitLoss} <i class="fab fa-ethereum"></i></p></td>
            <td><p>{date}</p></td>
          </tr>
        {/each}
    
    {/if}
  
    <tr />
  </table>
  
  <style>
    table h3 {
      margin-top: 50px;
      font-weight: 700;
      font-size: 1.5rem;
    }
  
    table p {
      font-weight: 600;
      font-size: 1.1rem;
    }
  </style>
  