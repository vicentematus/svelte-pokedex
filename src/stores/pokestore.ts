import { writable } from "svelte/store";
import type { PokemonApi } from "$types/Pokemon";

export const pokemon = writable<Partial<PokemonApi[]>>();
