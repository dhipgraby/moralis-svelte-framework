<script>
	import { Moralis } from "@moralis/MoralisSvelte";

	export const login = async () => {
		try {
			const user = await Moralis.Web3.authenticate();
			console.log(user);
		} catch (error) {
			const code = error.code;
			const message = error.message;
		}
	};

</script>

<div class="row col-lg-12">
	<div class="col-lg-6 col-sm-12" align="left">
		<div class="fundContract greyBox" onclick="openFundModal()">
			<p class="m-0 c-yellow">
				
					Fund Contract <i class="fas fa-download" />
			</p>
		</div>
	</div>

	<div class="col-lg-6 col-sm-12 " align="right">
		<div class="contractBalance greyBox c-white">
			<span class="c-yellow" on:click={login}>Login</span>
		</div>
	</div>
</div>

