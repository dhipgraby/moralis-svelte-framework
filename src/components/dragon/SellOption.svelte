<script>
    import BasicModal from "../modals/BasicModal.svelte";
    import { setForSale,removeDragonFromSale, setMarketplaceApproval } from "@contracts/methods";
    import { onMount } from "svelte";

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
        callback: setMarketplaceApproval,
    };

    let modalData;

    onMount(() => {
        if (dragonProps.isApprovedForAll == true) {
            if (dragonProps.offer) {
                modalData = modal_modify_offer;
            } else {
                modalData = modal_Sell;
            }
        } else {
            modalData = modal_approve;
        }
    });
</script>

<BasicModal {...modalData} id={"dragonModal" + dragonProps.id}>
    {#if dragonProps.isApprovedForAll}
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
        <h6>Set marketplace Approval to sell your NFTs</h6>
    {/if}
</BasicModal>
