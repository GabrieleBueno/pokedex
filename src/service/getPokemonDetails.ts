import api from '@/service/api';
import type { PokemonDetail } from './types';

export const getPokemonDetails = async (id: string): Promise<PokemonDetail> => {
  try {
    const response = await api.get<PokemonDetail>(`/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pokemon details: ', error);
    throw error;
  }
};
