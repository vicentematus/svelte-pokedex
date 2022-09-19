/** @type {import('./$types').PageLoad} */
const STATS_ICONS: any = {
	hp: () => 'HPIcon',
	attack: () => 'AttackIcon',
	defense: () => 'DefenseICON',
	specialAttack: () => 'SpeccialAttackICOn',
	specialDefense: () => 'Deffense Icon',
	speed: () => 'speedIcon'
};

interface STAT_ICON {
	name: string;
	icon: string;
}
const STATS_ICONS_ARRAY: STAT_ICON[] = [
	{
		name: 'hp',
		icon: 'ShieldIcon'
	},
	{
		name: 'attack',
		icon: 'AttackICON'
	},
	{
		name: 'defense',
		icon: 'defenseIcon'
	},

	{
		name: 'special-attack',
		icon: 'defenseIcon'
	},

	{
		name: 'special-defense',
		icon: 'defenseIcon'
	},
	{
		name: 'speed',
		icon: 'speedIcon'
	}
];

const TYPES_ICONS = [
	{
		name: 'water',
		icon: 'img/types/water.webp',
		color: 'bg-blue-700'
	},
	{
		name: 'attack',
		icon: 'AttackICON'
	},
	{
		name: 'defense',
		icon: 'defenseIcon'
	},

	{
		name: 'special-attack',
		icon: 'defenseIcon'
	},

	{
		name: 'special-defense',
		icon: 'defenseIcon'
	},
	{
		name: 'speed',
		icon: 'speedIcon'
	}
];
function getIcon(statName: string) {
	// Con esta funcion conseguir el nombre del icono para poder desplegarlo en el array correspondiente
	const iconName = STATS_ICONS_ARRAY.find((stat: any) => stat.name === statName);

	return iconName?.icon;
}

function getTypeIcon(typePokemon: string) {
	console.log('Type pokemon es ', typePokemon);
	// Con esta funcion conseguir el nombre del icono para poder desplegarlo en el array correspondiente
	const iconName = TYPES_ICONS.find((type: any) => type.name === typePokemon);
	console.log('Encontre el icono de type', iconName);

	return iconName?.color;
}
export async function load({ params }: any) {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	const { stats, types } = pokemon;

	const modifyStats = stats.map((stat: any) => {
		return {
			...stat,
			icon: getIcon(stat?.stat?.name)
		};
	});

	const modifiedTypes = types.map((type: any) => {
		console.log('Type es ', type);
		console.log('Type nested es ', type.type.name);
		return {
			...type,
			color: getTypeIcon(type?.type?.name)
		};
	});

	if (res.ok) {
		return {
			pokemon,
			modifyStats,
			modifiedTypes
		};
	}

	return {
		status: res.status,
		error: new Error('Couldnt fetch the pokemon')
	};
}
