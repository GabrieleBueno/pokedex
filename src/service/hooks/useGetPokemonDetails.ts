import { useEffect, useState } from 'react';

import { capitalizeName, getPokemonImage } from '@/utils';

import { getPokemonDetails } from '../getPokemonDetails';
import {
  formatPokemonMainInfo,
  formatPokemonTypes,
  formatPokemonStats,
} from '../helper';

import type { PokemonDetails } from '../types';

type UseGetPokemonsResult = {
  pokemonDetails: PokemonDetails;
  isLoading: boolean;
  error: string | null;
};

export const useGetPokemonDetails = (id: string): UseGetPokemonsResult => {
  const initialPokemonDetails: PokemonDetails = {
    id: 0,
    name: '',
    image: '',
    mainInfo: [],
    types: [],
    stats: [],
  };
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>(
    initialPokemonDetails
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonDetails = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getPokemonDetails(id);

      const mainInfo = formatPokemonMainInfo(data);
      const types = formatPokemonTypes(data.types);
      const stats = formatPokemonStats(data.stats);

      const details = {
        id: data.id,
        name: capitalizeName(data.name),
        image: getPokemonImage(data.id.toString()),
        mainInfo,
        types,
        stats,
      };

      setPokemonDetails(details);
    } catch (error) {
      setError('Error fetching Pokémons');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [id]);

  return { pokemonDetails, isLoading, error };
};
