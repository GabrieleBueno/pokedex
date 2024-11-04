import api from '@/service/api';

import type { PokemonData, PokemonResult } from './types';

export const getPokemons = async (
  offset: number,
  limit: number
): Promise<PokemonResult[]> => {
  try {
    const response = await api.get<PokemonData>('/pokemon', {
      params: {
        offset,
        limit,
      },
    });

    return response?.data?.results;
  } catch (error) {
    console.error('Error fetching pokemons: ', error);
    throw error;
  }
};
