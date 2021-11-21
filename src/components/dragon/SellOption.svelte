<script>
    import BasicModal from "../modals/BasicModal.svelte";
    import { setForSale,removeDragonFromSale, setApprovalForAll,singleApproval } from "@contracts/methods";
    import { afterUpdate,onMount } from "svelte";

    export let dragonProps;
    let price = 1;

    const createOffer = async () => {
        setForSale(dragonProps.id, price);
    };

    let modal_Sell = {
        submit_name: "submit",
        title: "Create marketplace offer",
        callback: createOffer,
    };

    let modal_modify_offer = {
        submit_name: "submit",
        title: "Change offer for token id: <b>" + dragonProps.id + "</b>",
        callback: false,
    };

    let modal_approve = {
        submit_name: "Approve",
        title: "Marketplace Approval",
        callback: false,
    };

    let modalData;

    onMount(() => {
        updateDragonData(dragonProps)
    });

    afterUpdate(()=>{        
        updateDragonData(dragonProps)
    })    

    function updateDragonData(dragonProps) {
        if (dragonProps.isApproved == true) {
            if (dragonProps.offer) {
                modalData = modal_modify_offer;
            } else {
                modalData = modal_Sell;
            }
        } else {
            modalData = modal_approve;
        }
    }

</script>

<BasicModal {...modalData} id={"dragonModal" + dragonProps.id}>
    {#if dragonProps.isApproved}
        {#if dragonProps.offer}
            <h6>Change offer</h6>
            <div class="group-btn">
                <button class="btn btn-danger text-light" on:click={() => removeDragonFromSale(dragonProps.id) }>Remove Offer</button>

                <button class="btn btn-warning text-dark">Modify Offer</button>
            </div>
        {:else}
            <h6>Create a offer in the marketplace</h6>
            <small><b>Token Id {dragonProps.id} </b></small>
            <input class="form-control" type="text" bind:value={price} />
        {/if}
    {:else}      
        <div align="center">
            <h6>Approve the marketplace to sell your NFTs</h6>
            <p><small>Approve marketplace for only this token</small></p>
            <button class="btn btn-danger text-light" on:click={() => singleApproval(dragonProps.id) }>Approve single token</button>
            <br>
            <p><small> Approve marketplace for your tokens</small></p>
            <button class="btn btn-danger text-light" on:click={() => setApprovalForAll() }>Approve for All</button>
        </div>
    {/if}
</BasicModal>

<style>

small {

    font-weight: 800;

}

button {
    white-space: nowrap;
}
    
</style>
