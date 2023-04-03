<script lang="ts">
	import { pokemon } from '../stores/pokestore';
	import '../app.css';
	import PokemonCard from '../components/PokemonCard.svelte';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	let searchTerm = '';
	let filteredPokemons: any = [];

	$: {
		// Reacciona si cambia la variable
		console.log(searchTerm);

		if (searchTerm) {
			filteredPokemons = $pokemon.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemons = [...$pokemon];
		}
	}
</script>

<img src="/img/pokeball.png" class="w-32 h-32 mx-auto" alt="" />
<h1 class="text-3xl  text-white font-semibold uppercase text-center">SVELTE KIT POKEDEX</h1>
<p class="text-white text-center">Search for your favorite pokemons. Using the pokeapi.</p>
<input
	bind:value={searchTerm}
	placeholder="Search for example: Ivysaur, Squirtle"
	type="text"
	class="nes-input"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
	{#each filteredPokemons as pokemon (pokemon.id)}
		<PokemonCard {pokemon} />
	{/each}
</div>

<style>
</style>
