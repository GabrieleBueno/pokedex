import { capitalizeName } from '@/utils';

import type { Ability } from '../types';

export const formatPokemonAbilities = (abilities: Ability[]) => {
  return abilities.map((item) => capitalizeName(item.ability.name)).join('\n');
};
