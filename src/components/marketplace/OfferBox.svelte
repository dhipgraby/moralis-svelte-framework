<script>

export let dragonProps

</script>


    <div class="dragonInfo col-lg-8 col-md-12 col-sm-12">

        <h1>Dragon info</h1>
        <hr>

        <h3>Name: <span></span></h3>
        <h3>Level: <span></span></h3>
        <h3>Generation: {dragonProps.generation} <span></span></h3>
        <h3>Dna: <span>{dragonProps.genes}</span></h3>
        <h3>Attributes: <span></span></h3>
    
        <hr>
        <h2>Parents: </h2>
        <p>Mom: {dragonProps.mumId}</p>
        <p>Dad: {dragonProps.dadId}</p>


    </div>



<style>

    h1 {
        font-size: 30px;
    }
   
    h2 {
        font-size: 28px;
        font-weight: 600;
    }
   
    h3 {
        font-size: 22px;
    }

    .dragonInfo {
        box-shadow: 0px 5px 7px 0px #444444;
        text-align: left;
        background-color: white;
        padding: 20px;
        color: #3f3f3f;
        margin-top: -15px;
        border-radius: 10px;
    }
</style>