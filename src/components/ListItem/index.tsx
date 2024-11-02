import { POKEMON_TYPE_COLORS } from '@/assets/typeColors';
import { Container, Avatar, Title, Identification } from './styles';
import React from 'react';

type ListItemProps = {
  id?: string;
  name: string;
  image: string;
};

function ListItem({ id, name, image, ...rest }: ListItemProps) {
  return (
    <Container style={{ backgroundColor: POKEMON_TYPE_COLORS[rest.type.name] }}>
      <Avatar source={{ uri: image }} />
      <Title>{name}</Title>
      <Identification>{id}</Identification>
      <Identification>{rest.type.name}</Identification>
    </Container>
  );
}

export default React.memo(ListItem);
