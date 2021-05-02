<script>
    import { userSession } from "@storage/userData";
    import Alert from "../../alerts/alertMsg.svelte";
    import { goto, stores } from "@sapper/app";
    import { postCall } from "@helpers/helpers";
    const { session } = stores();
    let user = "kenky";
    let password = 111111;
    let alert = false;
    let alertData = {};

    export const handleSubmit = async () => {
        const result = await postCall("login.json", { user,password })    
        requestHandler(result)
    };
    
    load()
    async function load() {
        await handleSubmit()
    }

    function requestHandler(result) {

        if (result.status != 200) {
            console.log("error in login form");
            alertData.alertType = "warning";
        } else {
            console.log("Login succesfull", result.sessionData);
            alertData.alertType = "success";
            $session.userInfo = result.sessionData;

                userSession.update((value) => {
                    return (value = result.sessionData);
                });
                goto("/dashboard");
            
        }
        alertData.content = result.msg;
        alert = true;
    }
</script>

<h1>Log in</h1>

<div align="center" class="mt-5">
    <div class="col-lg-6 col-sm-12" align="left">
        {#if alert}
    <div class="pt-3">
        <Alert {...alertData} />
    </div>
{/if}
        <form on:submit|preventDefault={handleSubmit}>
            <div class="mb-3">
                <label for="user" class="form-label">Email or username</label>
                <input
                    type="text"
                    bind:value={user}
                    class="form-control"
                    id="user"
                />

                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                        type="password"
                        bind:value={password}
                        class="form-control"
                        id="password"
                    />
                    <br />
                    <small><b>forgot password?</b></small>
                </div>
                <div class="mb-3 form-check">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        id="remember"
                    />
                    <label class="form-checklabel" for="remember"
                        >Check me out</label
                    >
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</div>

<style>
    h1 {
        font-size: 50px;
        margin: 0px;
        text-align: center;
    }
</style>
