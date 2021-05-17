<script>
	import { onMount } from "svelte";
	import { Moralis } from "@moralis/MoralisSvelte";
	import { alertTrigger } from "@storage/global";
	import Alert from "../components/alerts/alertMsg.svelte";
	import { getDeposits, totalDeposited } from "@contracts/CloudFunctions";
	import ContractButtons from "../components/contract/ContractButtons.svelte";


	let alertData;

	const unsubscribe = alertTrigger.subscribe((value) => {	
		alertData = { show:value.show,alertType:value.alert,content:value.content }
	});

	onMount(async () => {
		Moralis.initialize("9qYsGqSNg37j0F8T6KpFb37khgCMf050exRf90pw");
		Moralis.serverURL = "https://ijkrgxxupwmx.moralis.io:2053/server";
		// let allDeposits = await getDeposits();
	});

</script>

<svelte:head>
	<title>Moralis CoinFlip App</title>
</svelte:head>

<div class="mt-4">
	<h1 class="c-yellow reflex">CoinFlip Dapp <i class="fab fa-ethereum" /></h1>

	{#if alertData.show}
		<div class="pt-3">
			<Alert {...alertData} />
		</div>
	{/if}

	<div class="btnDiv" align="center">
		<br />
		<ContractButtons />
	</div>
</div>
