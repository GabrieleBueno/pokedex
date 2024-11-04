import { darkenColor } from '@/utils';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ bgColor }) => darkenColor(bgColor, 50)};
  padding: 4px 8px;
  border-radius: 16px;
  align-self: flex-start;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;
