import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ColorContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  height: 150px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 16px;
`;

export const Identification = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.PRIMARY};
  `};
`;
