<script>
	import Layout from "./components/Layout.svelte";
	export let name;
	// import AppBar from './components/AppBar.svelte';
	// import SideDrawer from './components/SideDrawer.svelte';
</script>

<main>
	<Layout/>
</main>

<style>
	main {
		text-align: center;
		/*padding: 1em;*/
		/*max-width: 240px;*/
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
