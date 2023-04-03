import type { PokemonApi } from "types/Pokemon";
import { capitalizeFirstLetter } from "$lib/capitalizeLetter.ts";

export async function load() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=1000`;
  const res = await fetch(url);
  const data = await res.json();
  const loadedPokemon: PokemonApi[] = data.results.map((
    data: PokemonApi,
    index: number,
  ) => ({
    name: capitalizeFirstLetter(data.name),
    id: index + 1,
    image:
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
      }.png`,
  }));
  return { loadedPokemon };
}
