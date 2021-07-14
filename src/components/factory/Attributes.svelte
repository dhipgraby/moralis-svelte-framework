<script>
    import ColorSlider from "./ColorSlider.svelte";
    import AttrSlider from "./AttrSlider.svelte";
    import { fade } from "svelte/transition";
    var showColors = true;
</script>

<div class="col-lg-7 cattributes m-2 light-b-shadow">
    <div class="row">
        <div class="col-sm-6">
            <h2
                class="pointer {showColors ? ' active' : ''}"
                on:click={() => (showColors = true)}
            >
                Dragon Colors
            </h2>
        </div>

        <div class="col-sm-6">
            <h2
                class="pointer {!showColors ? ' active' : ''}"
                on:click={() => (showColors = false)}
            >
                Dragon Attributes
            </h2>
        </div>
    </div>
    <div class="attributeBox">
        <div transition:fade={{ duration: 2000 }} style="{showColors ? 'display:block;' : 'display:none;'}">
            <ColorSlider />
        </div>
        <div transition:fade={{ duration: 2000 }} style="{!showColors ? 'display:block;' : 'display:none;'}">
            <AttrSlider />
        </div>
    </div>
</div>

<style>
    .attributeBox {
        padding: 25px;
    }

    h2 {
        color: #adadad;
        font-size: 1.6em;
        font-weight: 600;
    }

    .active {
        color: #000000;
    }

    h2:hover {
        color: #000000;
    }
</style>
