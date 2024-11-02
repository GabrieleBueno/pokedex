import { useEffect, useState } from 'react';
import { getPokemons } from '@/service/getPokemons';
import { getIdByUrl } from '@/utils/getIdByUrl';
import { getPokemonDetails } from '../getPokemonDetails';
import { formatPokemonFirstType } from '../helper/formatPokemonFirstType';
import { getPokemonImage } from '@/utils/getPokemonImage';
import { POKEMON_TYPE_COLORS } from '@/assets/typeColors';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  type: {
    name: string;
    color: string;
  };
};

type UseGetPokemonsResult = {
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

  const fetchPokemons = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getPokemons(offset, limit);

      const formattedPokemons = await Promise.all(
        data.map(async (item) => {
          const id = getIdByUrl(item.url);
          const pokemonTypes = await getPokemonDetails(id);
          const pokemonFirstType = formatPokemonFirstType(pokemonTypes.types);

          return {
            id,
            name: item.name,
            image: getPokemonImage(id),
            type: {
              name: pokemonFirstType.name,
              color: POKEMON_TYPE_COLORS[pokemonFirstType.name],
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
  };

  const fetchNextPage = () => {
    if (!isLoading) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

  return { pokemons, isLoading, error, fetchNextPage };
};
