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

function getIcon(statName: string) {
	// Con esta funcion conseguir el nombre del icono para poder desplegarlo en el array correspondiente
	const iconName = STATS_ICONS_ARRAY.find((stat: any) => stat.name === statName);

	return iconName?.icon;
}
export async function load({ params }: any) {
	console.log(params.slug);
	const id = params.id;
	console.log('la id es ', id);
	console.log('Entre al consito');
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	const { stats, types } = pokemon;

	const modifyStats = stats.map((stat: any) => {
		console.log('Stat en el foreach es ', stat);
		return {
			...stat,
			icon: getIcon(stat?.stat?.name)
		};
	});

	const modifiedTypes = types.map((type: any) => {
		return {
			...type,
			icon: 'Test'
		};
	});

	console.log('Stats modificado es ', modifyStats);
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
