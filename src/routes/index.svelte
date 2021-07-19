<script>
	import DragonLogo from "../components/dragon/DragonLogo.svelte";
</script>

<svelte:head>
	<title>Dragon-masters</title>
</svelte:head>

<div class="mainContainer body" align="center">
	<h1><i class="fas fa-dragon" /></h1>
	<h1 class="reflex-box">Dragon Masters NFTs</h1>

	<div class="mt-4" align="center">
		<DragonLogo />
	</div>
</div>

<style>
	.body {
		background-color: #4f2828;
		background-image: linear-gradient(to top right, #000000 45%, #4f2828);
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 100vh;
	}

	h1 {
		color: #ffffff;
	}
</style>
