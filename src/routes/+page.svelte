<script lang="ts">
	import { pokemon } from '../stores/pokestore';
	import PokemonCard from '../components/PokemonCard.svelte';
	import type { PokemonApi } from '../types/Pokemon';

	let searchTerm = '';
	let filteredPokemons: PokemonApi[] = [];

	$: {
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
<p class="text-white text-center mt-2">Search for your favorite pokemons. Using the pokeapi.</p>
<input
	bind:value={searchTerm}
	placeholder="Search for example: Ivysaur, Squirtle"
	type="text"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
	{#each filteredPokemons.slice(0, 20) as pokemon (pokemon.id)}
		<PokemonCard {pokemon} />
	{/each}
</div>
