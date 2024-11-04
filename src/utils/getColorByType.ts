import { POKEMON_TYPE_COLORS } from '@/constants';

type ColorKey = keyof typeof POKEMON_TYPE_COLORS;

export const getColorByType = (type: string) => {
  return POKEMON_TYPE_COLORS[type as ColorKey];
};
