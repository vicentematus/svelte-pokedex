/** @type {import('./$types').PageLoad} */
const STATS_ICONS: any = {
  hp: () => "HPIcon",
  attack: () => "AttackIcon",
  defense: () => "DefenseICON",
  specialAttack: () => "SpeccialAttackICOn",
  specialDefense: () => "Deffense Icon",
  speed: () => "speedIcon",
};

interface STAT_ICON {
  name: string;
  icon: string;
}
const STATS_ICONS_ARRAY: STAT_ICON[] = [
  {
    name: "hp",
    icon: "hp.png",
  },
  {
    name: "attack",
    icon: "attack.png",
  },
  {
    name: "defense",
    icon: "defense.png",
  },

  {
    name: "special-attack",
    icon: "special-attack.png",
  },

  {
    name: "special-defense",
    icon: "special-defense.png",
  },
  {
    name: "speed",
    icon: "speed.png",
  },
];

const TYPES_ICONS = [
  {
    name: "water",
    icon: "img/types/water.webp",
    color: "bg-blue-700",
  },
  {
    name: "fire",
    icon: "img/types/water.webp",
    color: "bg-red-700",
  },
  {
    name: "poison",
    icon: "img/types/water.webp",
    color: "bg-purple-700",
  },

  {
    name: "bug",
    icon: "img/types/water.webp",
    color: "bg-gray-700",
  },

  {
    name: "flying",
    icon: "img/types/water.webp",
    color: "bg-gray-700",
  },

  {
    name: "normal",
    icon: "",
    color: "bg-gray-600",
  },

  {
    name: "ground",
    icon: "",
    color: "bg-yellow-600",
  },

  {
    name: "grass",
    icon: "",
    color: "bg-green-700",
  },

  {
    name: "fighting",
    icon: "",
    color: "bg-red-700",
  },

  {
    name: "psychic",
    icon: "",
    color: "bg-purple-600",
  },

  {
    name: "rock",
    icon: "",
    color: "bg-yellow-800",
  },

  {
    name: "electric",
    icon: "",
    color: "bg-yellow-500",
  },
  {
    name: "steel",
    icon: "",
    color: "bg-gray-500",
  },

  {
    name: "ghost",
    icon: "",
    color: "bg-gray-900",
  },

  {
    name: "ice",
    icon: "",
    color: "bg-teal-500",
  },
];
function getIcon(statName: string) {
  // Con esta funcion conseguir el nombre del icono para poder desplegarlo en el array correspondiente
  const iconName = STATS_ICONS_ARRAY.find((stat: any) =>
    stat.name === statName
  );

  return iconName?.icon;
}

function getTypeIcon(typePokemon: string) {
  console.log("Type pokemon es ", typePokemon);
  // Con esta funcion conseguir el nombre del icono para poder desplegarlo en el array correspondiente
  const iconName = TYPES_ICONS.find((type: any) => type.name === typePokemon);
  console.log("Encontre el icono de type", iconName);

  return iconName?.color;
}
export async function load({ params }) {
  const id = params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  const { stats, types } = pokemon;

  const modifyStats = stats.map((stat: any) => {
    return {
      ...stat,
      icon: getIcon(stat?.stat?.name),
    };
  });

  const modifiedTypes = types.map((type: any) => {
    return {
      ...type,
      color: getTypeIcon(type?.type?.name),
    };
  });

  if (res.ok) {
    return {
      pokemon,
      modifyStats,
      modifiedTypes,
    };
  }

  return {
    status: res.status,
    error: new Error("Couldnt fetch the pokemon"),
  };
}
