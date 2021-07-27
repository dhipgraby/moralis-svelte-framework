<script>
    import BasicModal from '../modals/BasicModal.svelte'
    import { setForSale,setMarketplaceApproval } from "@contracts/methods";

        export let dragonId;
        export let isApprove
    
        let price = 1
        const createOffer = async () => {
            setForSale(dragonId,price)        
        }
    
        let modal_Sell = {
            id:"mymodal",
            submit_name:"submit",
            title:"Create marketplace offer",
            callback: createOffer
        }
        
        let modal_approve = {
            id:"mymodal",
            submit_name:"Approve",
            title:"Marketplace Approval",
            callback: setMarketplaceApproval
        }

        let modalData = (isApprove) ? modal_Sell : modal_approve; 
        

    </script>

<BasicModal {...modalData} >

    {#if isApprove}
    <h6>Create a offer in the marketplace</h6>
    
    <input class="form-control" type="text" bind:value={price}>
    {:else}
    <h6>Set marketplace Approval to sell your NFTs</h6>
    {/if}    

</BasicModal>