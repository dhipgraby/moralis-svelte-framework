<script>
	export let segment;
	import { alertTrigger } from "@storage/global";
	import Alert from "../components/alerts/alertMsg.svelte";
	
	let alertData;

	const unsubscribe = alertTrigger.subscribe((value) => {
		alertData = {
			show: value.show,
			alertType: value.alert,
			content: value.content,
		};
	});


</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Dragon Dapp</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavDropdown"
			aria-controls="navbarNavDropdown"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link { (segment == undefined) ? 'active': ''}" aria-current="page" href="/"
						>Home</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link { (segment == 'factory') ? 'active': ''}" aria-current="page" href="/factory"
						>Factory</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link { (segment == 'console') ? 'active': ''}" aria-current="page" href="/console"
						>Testing UI</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link { (segment == 'cave') ? 'active': ''}" aria-current="page" href="/cave"
						>My Dragons <i class="fas fa-dragon"></i></a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link { (segment == 'breed') ? 'active': ''}" aria-current="page" href="/breed"
						>Breed <i class="fas fa-egg"></i></a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link { (segment == 'marketpalce') ? 'active': ''}" aria-current="page" href="/marketplace"
						>Marketplace <i class="fas fa-store"></i></a
					>
				</li>
				<!-- <li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/check">Check</a>
				</li> -->
				<!-- <li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			  Dropdown link
			</a>
			<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			  <li><a class="dropdown-item" href="#">Action</a></li>
			  <li><a class="dropdown-item" href="#">Another action</a></li>
			  <li><a class="dropdown-item" href="#">Something else here</a></li>
			</ul>
		  </li> -->
			</ul>
		</div>
	</div>
</nav>


{#if alertData.show}
	<Alert {...alertData} />
{/if}

