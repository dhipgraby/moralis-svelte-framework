<script>
	import { onMount } from "svelte";
	import { alertTrigger } from "@storage/global";
	import Alert from "../components/alerts/alertMsg.svelte";
	import TableContainer from "../components/tables/TableContainer.svelte";
	import ContractButtons from "../components/contract/ContractButtons.svelte";
	import { initEventListener } from "@contracts/events";

	onMount(async () => {		
		await initEventListener();
	});

	let alertData;

	const unsubscribe = alertTrigger.subscribe((value) => {
		alertData = {
			show: value.show,
			alertType: value.alert,
			content: value.content,
		};
	});
</script>

<svelte:head>
	<title>Moralis CoinFlip App</title>
</svelte:head>

{#if alertData.show}
<Alert {...alertData} />
{/if}


<div class="mt-4" align="center">
	<h1 class="c-yellow reflex">
		Ethereum Betting Dice <i class="fab fa-ethereum" />
	</h1>
	<p class="pl-5 pr-5">
		Bet for a lucky number Higher than 51 or Lower than 49 and get 40%
		profit from your bets
	</p>
	
	<div class="btnDiv" align="center">
		<br />
	
		<ContractButtons />
		<TableContainer />
	</div>
</div>
