import { writable } from 'svelte/store';

export const pokemon = writable([]);
function capitalizeFirstLetter(str: string) {
	// converting first letter to uppercase
	const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

	return capitalized;
}
const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=1000`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data: any, index: any) => ({
		name: capitalizeFirstLetter(data.name),
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));
	console.log(loadedPokemon);
	pokemon.set(loadedPokemon);
};

fetchPokemon();
