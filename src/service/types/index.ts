// ENDPOINTS TYPES

export type PokemonResult = {
  name: string;
  url: string;
};

export type PokemonData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
};

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
};

// HELPER TYPES

export type PokemonTypes = {
  type: {
    name: string;
    url: string;
  };
};
