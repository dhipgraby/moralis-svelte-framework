<script>
	import { onMount } from "svelte";
	import { Moralis } from "@moralis/MoralisSvelte";
	import { alertTrigger } from "@storage/global";
	import Alert from "../components/alerts/alertMsg.svelte";
	import TableContainer from "../components/tables/TableContainer.svelte";

	let alertData;

	const unsubscribe = alertTrigger.subscribe((value) => {
		alertData = {
			show: value.show,
			alertType: value.alert,
			content: value.content,
		};
	});
	
	onMount(async () => {
		Moralis.initialize("1DxEcin8yYJ1A3y0Eaa4LdRuJFONcFgX1Yyv6GYA");
		Moralis.serverUrl("https://owqsgswuwr6r.moralis.io:2053/server");
	});

</script>

<svelte:head>
	<title>Dragon-masters</title>
</svelte:head>

{#if alertData.show}
	<Alert {...alertData} />
{/if}

<div class="mt-4" align="center">
	<h1 class="c-yellow reflex">
		Dragon Masters Contract <i class="fas fa-dragon" />
	</h1>

	<h2>Stats</h2>
	<TableContainer />
</div>
