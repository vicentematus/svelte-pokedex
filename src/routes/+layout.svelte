<script>
	import { navigating } from '$app/stores';
	import '../app.css';
	import '@fontsource/press-start-2p';
	import { pokemon } from '../stores/pokestore';
	import Footer from '$components/Footer.svelte';

	export let data;

	const { loadedPokemon } = data;

	pokemon.set(loadedPokemon);
</script>

<div class="bg-indigo-700 min-h-screen">
	<div class="max-w-5xl mx-auto px-2 lg:px-4 py-2 lg:py-4 ">
		{#if $navigating}
			<img src="/videos/pikachu.gif" class="mx-auto" alt="gif of pikachu" />
			<p class="text-3xl text-white text-center">Loading...</p>
			<p class="text-lg mt-2 text-white text-center">
				Wait until the PokeAPI returns the pokemon you love...
			</p>
		{:else}
			<slot />
		{/if}
		<Footer />
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Press Start 2P', cursive;
		cursor: url('/img/pointer.png'), auto;
	}
	:global(a) {
		cursor: url('/img/pointer.png'), auto;
	}

	:global(input) {
		cursor: url('/img/pointer.png'), auto;
	}
</style>
