<script>
    import Alert from "../../alerts/alertMsg.svelte";
    import { userSession } from "@storage/userData";
    import { goto, stores } from "@sapper/app";
    const { session } = stores();

     let alertData = { alertType:'info',content:'<b>Confirm to logout</b>'};

    const logout = () => {
        userSession.update((value) => {
            return (value = { loggedin: false, username: null });
        });
    };

    const handleSubmit = async () => {
        const res = await fetch("login.json", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const result = await res.json();

        if (result.status != 200) {
            console.log("error loggin out, try again.");
            alertData.alertType = "danger";
        } else {

            alertData.alertType = "success";
            $session.userInfo = { loggedin: false, username: null };
          
            setTimeout(() => {
                logout()
                goto("/login");
            }, 1000);
        }
        alertData.content = "<b>Session end. Thanks for visit us. Bye bye</b>";
       
    };
</script>

<div class="logoutDiv">
    <h1 class="mb-2">
        <i class="fas fa-door-open" />
    </h1>
    <br />

    <Alert {...alertData} />

    <br />

    <button on:click={handleSubmit} class="btn btn-dark">Exit</button>
</div>

<style>
    i {
        color: #444444;
        font-size: 5rem;
    }

    .btn {
        min-width: 30%;
    }

    .logoutDiv {
        padding-top: 20%;
        text-align: center;
    }
</style>
