<script>
	import Nav from "../components/Nav.svelte";
	import { alertTrigger } from "@storage/alerts";
	import Alert from "../components/alerts/alertMsg.svelte";

	export let segment;

	let lastAlerts;

	const unsubscribe = alertTrigger.subscribe((alerts) => {
		console.log(alerts);
		lastAlerts = alerts;
	});
</script>

<Nav {segment} />

	{#each lastAlerts as alert, i}
		<Alert {...alert} alert_number={i} />
	{/each}


<main>
	<slot />
</main>

<style>
	main {
		position: relative;
		max-width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
