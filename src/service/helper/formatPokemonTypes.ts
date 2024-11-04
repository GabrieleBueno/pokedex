import { getColorByType, getIdByUrl, capitalizeName } from '@/utils';

import type { PokemonsTypes, Type } from '../types';

export const formatPokemonTypes = (types: Type[]): PokemonsTypes[] => {
  return types.map((type) => {
    return {
      id: getIdByUrl(type.type.url),
      name: capitalizeName(type.type.name),
      color: getColorByType(type.type.name),
    };
  });
};
