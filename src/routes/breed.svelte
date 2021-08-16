<script>
    //COMPONENTS    
    import CssFiles from "../components/factory/CssFiles.svelte";
    import Container from "../components/Container.svelte";
    import BreedBox from "../components/breed/BreedBox.svelte";

</script>

<svelte:head>
    <title>Breed Dragons</title>
    <CssFiles />
</svelte:head>

<Container >
    <h1 class="egg"><i class="fas fa-egg" /></h1>
    <h1>Breeding</h1>
    <BreedBox />
</Container>

<style>


    h1 {
        color: #ffffff;
    }

    .egg {
        color: #ff6d6d;
    }
</style>
