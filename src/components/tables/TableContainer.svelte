<script>
  import { onMount } from "svelte";
  import { Moralis } from "@moralis/MoralisSvelte";  
  import { userGames } from "@contracts/CloudFunctions";
  import { userGamesTable } from "@helpers/tableParser";
  import { oracleGameEvent,updateOracle } from "@storage/games"
  import { contractInfo } from "@storage/contract";

  let games = [];

  onMount(async () =>{
    Moralis.initialize("QkhYAjNLWCdSS2Xd0vY3V3CzeKR1OLqlcaAbrLWN");
    Moralis.serverURL = "https://u4zbu1bawewx.moralis.io:2053/server";
    let allgames = await userGames()
    console.log(allgames)
    // await updateUserGames()
  })

  // async function updateUserGames(event) {
  //   let user_games = await userGames();
  //   games = await userGamesTable(user_games)
  //   updateOracle(false)
	// }

  // if($oracleGameEvent == true){
  //   updateUserGames()
  // }


</script>
<!-- 
<UserGames {games} />-->