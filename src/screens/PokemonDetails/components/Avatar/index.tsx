import React from 'react';

import type { PokemonDetails } from '@/service/types';

import { Container, AvatarImage } from './styles';

type AvatarProps = Pick<PokemonDetails, 'image'>;

export function Avatar({ image }: AvatarProps) {
  if (!image) return;

  return (
    <Container>
      <AvatarImage source={{ uri: image }} />
    </Container>
  );
}
