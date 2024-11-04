import React from 'react';

import { useTheme } from 'styled-components';

import AntDesign from '@expo/vector-icons/AntDesign';

import { Container } from './styles';

type ListItemProps = {
  icon: 'right' | 'left';
  onPress: () => void;
  visible: boolean;
};

export function IconButton({ icon, onPress, visible }: ListItemProps) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <AntDesign
        name={icon}
        size={20}
        color={visible ? COLORS.PRIMARY : 'transparent'}
        onPress={onPress}
      />
    </Container>
  );
}
