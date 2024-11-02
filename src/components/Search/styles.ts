import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  margin: 12px 0px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.LIGHT_GREEN};
  `};
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
  line-height: 19px;
  margin-left: 4px;
`;
