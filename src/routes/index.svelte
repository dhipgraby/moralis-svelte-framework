<script>
	import { onMount } from "svelte";
	import { Moralis } from "@moralis/MoralisSvelte";
	import { getDeposits,totalDeposited } from "@contracts/CloudFunctions";
	import { fundContract,getContractBalance } from "@contracts/methods";

	const contractAddress = "0x1aE6f759A02f87fe26A107ae3d80AE3Fbe3874E8";
	let contractInstance;
	let web3;

	onMount(async () => {
		Moralis.initialize("9qYsGqSNg37j0F8T6KpFb37khgCMf050exRf90pw");
		Moralis.serverURL = "https://ijkrgxxupwmx.moralis.io:2053/server";
		let allDeposits = await getDeposits();
        console.log(allDeposits)

	});

</script>

<svelte:head>
	<title>Moralis CoinFlip App</title>
</svelte:head>

<div class="mt-4">
	<h1 class="c-yellow reflex">CoinFlip Dapp <i class="fab fa-ethereum"></i></h1>
	<div class="btnDiv" align="center">
		<br />
		<!-- <button class="shadow-lg" on:click={login}>
			<h1>Login with metamask</h1></button
		> --> 
		<br />
		<button class="shadow-lg" on:click={getContractBalance}>
			<h1>Contract Balance</h1></button
		>
		<button class="shadow-lg" on:click={fundContract}>
			<h1>Fund contract</h1></button
		>
	</div>
</div>

<style>
	h1 {
		font-size: 50px;
		margin: 0px;
		text-align: center;
	}

	button {
		background: #f24141;
		background-image: linear-gradient(to right, #f95300, #f24141);
		color: #ffffff;
		font-weight: 700;
		padding: 10px;
		border-radius: 10px;
		margin-top: 40px;
		min-width: 400px;
		border: none;
	}
</style>

