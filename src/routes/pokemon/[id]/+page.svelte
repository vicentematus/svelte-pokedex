<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/capitalizeLetter';
	import Stats from '$components/StatsCard/Stats.svelte';
	//import icon component
	import { Icon } from '@steeze-ui/svelte-icon';

	//import as many icons from a Icon Pack
	export let data: any;

	const { modifyStats, modifiedTypes } = data;
	console.log('Stats modificados es', modifyStats);
	const pokemon: any = data?.pokemon;
	const { name, sprites, stats } = pokemon;
	console.log('Modified types es ', modifiedTypes);
	console.log('pokemon es ', pokemon);
</script>

<main class=" mx-auto  max-w-lg ">
	<img class="h-40 w-40 mx-auto" src={sprites?.front_default} alt={name} />
	<h1 class="text-center text-3xl font-semibold text-white ">{capitalizeFirstLetter(name)}</h1>
	{#each modifiedTypes as type (type.slot)}
		<p class="text-white font-semibold">{type.type.name}</p>
	{/each}
	<ul class="grid grid-cols-12 gap-4 mt-16">
		{#each modifyStats as stat, i (i)}
			<li
				class="col-span-12 md:col-span-3 bg-white rounded-lg px-4 py-2 flex flex-col justify-center items-center"
			>
				{stat.icon}
				<p class="uppercase font-semibold text-center">{stat.stat.name}</p>
				<p>{stat.base_stat}</p>
			</li>
		{/each}
	</ul>
</main>
