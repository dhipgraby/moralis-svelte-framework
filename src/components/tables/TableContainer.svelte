<script>
  import { onMount } from "svelte";
  import { Moralis } from "@moralis/MoralisSvelte";
  import {
    getDeposits,
    totalDeposited,
    userDeposits,
    userGames,
  } from "@contracts/CloudFunctions";
  import { userGamesTable } from "@helpers/tableParser";
  import UserGames from "./UserGames.svelte"

  let games = [];

  onMount(async () =>{
    await updateGames()
  })

  async function updateGames() {
    Moralis.initialize("9qYsGqSNg37j0F8T6KpFb37khgCMf050exRf90pw");
    Moralis.serverURL = "https://ijkrgxxupwmx.moralis.io:2053/server";
    let user_games = await userGames();
    games = await userGamesTable(user_games);
  }
</script>

<UserGames {games} />