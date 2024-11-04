import React from 'react';

import { formatToThreeDigits } from '@/utils';

import type { Pokemon } from '@/service/types';

import { Container, Avatar, Title, Identification } from './styles';

type ListItemProps = {
  onPress: (id: string) => void;
  pokemon: Pokemon;
};

function ListItem({ onPress, pokemon }: ListItemProps) {
  const { id, name, image, type } = pokemon;

  return (
    <Container bgColor={type.color} onPress={() => onPress(id)}>
      <Avatar source={{ uri: image }} />
      <Title>{name}</Title>
      <Identification>{formatToThreeDigits(id)}</Identification>
    </Container>
  );
}

export default React.memo(ListItem);
