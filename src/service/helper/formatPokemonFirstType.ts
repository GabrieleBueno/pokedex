import { getIdByUrl } from '@/utils/getIdByUrl';
import { PokemonTypes } from '../types';

export const formatPokemonFirstType = (types: PokemonTypes[]) => {
  const [firstType] = types;

  return {
    id: getIdByUrl(firstType.type.url),
    name: firstType.type.name,
  };
};
