
<script>
 
    import { userSession } from "@storage/userData";
    import { onDestroy } from "svelte";
    
    // export let userData;
    let currentUser;
    const unsubscribe = userSession.subscribe((value) => {
        currentUser = value;
    });

    onDestroy(unsubscribe);

    let alertInfo = {
        alertType: "light",
        content: "<h3><b>CONFIRM TO LOGOUT</b></h3>",
    };
</script>


<svelte:head>
    <title>Moralis - Logout</title>
</svelte:head>

