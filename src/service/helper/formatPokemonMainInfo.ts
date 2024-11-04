import { convertToKilograms, convertToMeter } from '@/utils';

import { formatPokemonAbilities } from './formatPokemonAbilities';

import type { PokemonDetail, PokemonMainInfo } from '../types';

export const formatPokemonMainInfo = (
  pokemonDetails: PokemonDetail
): PokemonMainInfo[] => {
  const weight = convertToKilograms(pokemonDetails.weight);
  const height = convertToMeter(pokemonDetails.height);
  const abilities = formatPokemonAbilities(pokemonDetails.abilities);

  return [
    {
      description: 'Weight',
      value: weight.toString(),
      measure: 'kg',
      icon: 'weight-hanging',
    },
    {
      description: 'Height',
      value: height.toString(),
      measure: 'm',
      icon: 'ruler',
    },
    {
      description: 'Abilities',
      value: abilities,
      hideSeparator: true,
    },
  ];
};
