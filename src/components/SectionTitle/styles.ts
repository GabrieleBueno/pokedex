import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.PRIMARY};
  `};
  text-align: center;
`;
