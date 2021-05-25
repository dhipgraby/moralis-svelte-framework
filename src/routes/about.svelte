<script>
	import { balances } from "@storage/contract";

	let dappBalance;
	let userBalance

const unsubscribe = balances.subscribe((value) => {
    dappBalance = value.contract;
    userBalance = value.user;	
	});


</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>{ dappBalance }</h1>

<p>This is the 'about' page. There's not much here.</p>