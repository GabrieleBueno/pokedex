import { useCallback, useEffect, useState } from 'react';

import { getPokemons } from '@/service/getPokemons';
import { getIdByUrl, capitalizeName, getPokemonImage } from '@/utils';

import { formatPokemonTypes } from '../helper';
import { getPokemonDetails } from '../getPokemonDetails';

import type { Pokemon } from '../types';

export type UseGetPokemonsResult = {
  pokemons: Pokemon[];
  isLoading: boolean;
  error: string | null;
  fetchNextPage: () => void;
};

export const useGetPokemons = (): UseGetPokemonsResult => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const limit = 18;

  const fetchPokemons = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getPokemons(offset, limit);

      const formattedPokemons = await Promise.all(
        data.map(async (item) => {
          const id = getIdByUrl(item.url);
          const pokemonTypes = await getPokemonDetails(id);
          const [pokemonFirstType] = formatPokemonTypes(pokemonTypes.types);

          return {
            id,
            name: capitalizeName(item.name),
            image: getPokemonImage(id),
            type: {
              name: pokemonFirstType.name,
              color: pokemonFirstType.color,
            },
          };
        })
      );

      setPokemons((prev) => [...prev, ...formattedPokemons] as Pokemon[]);
    } catch (error) {
      setError('Error fetching Pokémons');
    } finally {
      setIsLoading(false);
    }
  }, [offset]);

  const fetchNextPage = useCallback(() => {
    if (!isLoading) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  }, [isLoading, limit]);

  useEffect(() => {
    if (offset === pokemons.length) {
      fetchPokemons();
    }
  }, [offset, fetchPokemons]);

  return { pokemons, isLoading, error, fetchNextPage };
};
