export type PokemonResult = {
  name: string;
  url: string;
};

export type PokemonData = {
  results: PokemonResult[];
};

export type Type = {
  type: {
    name: string;
    url: string;
  };
};

export type Ability = {
  ability: {
    name: string;
    url: string;
  };
};

export type Stat = {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Type[];
  abilities: Ability[];
  stats: Stat[];
};

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  type: {
    name: string;
    color: string;
  };
};

export type PokemonMainInfo = {
  description: string;
  value: string;
  measure?: string;
  icon?: string;
  hideSeparator?: boolean;
};

export type PokemonsTypes = {
  id: string;
  name: string;
  color: string;
};

export type PokemonsStats = {
  id: string;
  name: string;
  value: number;
};

export type PokemonDetails = {
  id: number;
  name: string;
  image: string;
  mainInfo: PokemonMainInfo[];
  types: PokemonsTypes[];
  stats: PokemonsStats[];
};
