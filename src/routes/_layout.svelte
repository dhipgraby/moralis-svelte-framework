<script>
	//LIBRARIES
	import Nav from "../components/navbars/Nav.svelte";
	import Footer from "../components/Footer.svelte";
	import HeaderLibs from "../components/HeaderLibs.svelte";
	export let segment;
</script>

<svelte:head>
	<HeaderLibs />
</svelte:head>




	<body>
		<div class="purpleOverlay">
			<Nav {segment} />
			<slot />
		</div>
	</body>

<Footer />

<style>
	div {
		height: 100%;
	}

	body {
		min-height: 100vh;
	}
</style>
