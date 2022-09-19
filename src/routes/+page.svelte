<script lang="ts">
	import { pokemon } from '../stores/pokestore';
	import '../app.css';
	import PokemonCard from '../components/PokemonCard.svelte';
	let searchTerm = '';
	let filteredPokemons: any = [];

	$: {
		// Reacciona si cambia la variable
		console.log(searchTerm);

		if (searchTerm) {
			filteredPokemons = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemons = [...$pokemon];
		}
	}
</script>

<h1 class="text-3xl font-semibold uppercase">svelte Kit POKEDEX!</h1>
<input
	bind:value={searchTerm}
	type="text"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
	{#each filteredPokemons as pokemon (pokemon.id)}
		<PokemonCard {pokemon} />
	{/each}
</div>

<style>
</style>
