<script lang="ts">
	export let pokemon: any;
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${pokemon.id}`}
>
	<img src={pokemon.image} alt="" class="h-40 w-40" />
	<h2>{pokemon.name}</h2>
</a>
