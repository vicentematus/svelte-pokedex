<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/capitalizeLetter';

	export let data;

	const { modifyStats, modifiedTypes, status } = data;

	const pokemon = data?.pokemon;
	const { name, sprites, stats } = pokemon;
</script>

<main>
	<img class="h-40 w-40 mx-auto" src={sprites?.front_default} alt={name} />
	<h1 class="text-center text-3xl font-semibold text-white ">{capitalizeFirstLetter(name)}</h1>
	<div class="space-x-2 mt-4">
		{#each modifiedTypes as type (type.slot)}
			<span
				class={`shadow-md px-2 py-2 ${type.color} text-white  rounded-lg font-semibold uppercase`}
			>
				{type?.type?.name}
			</span>
		{/each}
	</div>

	<ul class="grid grid-cols-12 gap-4 mt-8">
		{#each modifyStats as stat, i (i)}
			<li
				class="col-span-12 md:col-span-3 bg-white rounded-lg px-4 py-2 flex flex-col justify-center items-center"
			>
				<img src={`/img/types/${stat.icon}`} alt="icon of the stat" class="w-12 h-12" />
				<p class="uppercase font-semibold text-center text-xs mt-2">
					{stat.stat.name.replace('-', ' ')}
				</p>
				<p>{stat.base_stat}</p>
			</li>
		{/each}
	</ul>
</main>
