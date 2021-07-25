<script>
    import BasicModal from '../modals/BasicModal.svelte'
    import { setForSale } from "@contracts/methods";

        export let dragonId;
    
        let price = 1
        const createOffer = async () => {
            setForSale(dragonId,price)        
        }
    
        let modalData = {
            id:"mymodal",
            submit_name:"submit",
            title:"Sell cat",
            callback: createOffer
        }
        
    </script>

<BasicModal {...modalData} >

    <h6>Create a offer in the marketplace</h6>
    
    <input class="form-control" type="text" bind:value={price}>

</BasicModal>