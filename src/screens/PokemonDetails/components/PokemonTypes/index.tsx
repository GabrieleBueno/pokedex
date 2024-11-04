import { Chip } from '@/components/Chip';

import type { PokemonsTypes } from '@/service/types';

import { Container } from './styles';

type PokemonTypesProps = {
  types: PokemonsTypes[];
};

export function PokemonTypes({ types }: PokemonTypesProps) {
  if (!types) return;

  return (
    <Container>
      {types.map((type) => (
        <Chip key={type.name} title={type.name} color={type.color} />
      ))}
    </Container>
  );
}
