import { capitalizeName, getIdByUrl } from '@/utils';

import type { PokemonsStats, Stat } from '../types';

export const formatPokemonStats = (stats: Stat[]): PokemonsStats[] => {
  return stats.map((item) => {
    return {
      id: getIdByUrl(item.stat.url),
      name: capitalizeName(item.stat.name),
      value: item.base_stat,
    };
  });
};
