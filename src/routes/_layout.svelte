<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<Nav {segment} />

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
