import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 0px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 4px;
  padding: 8px;
  border-radius: 8px;
  line-height: 19px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
    background-color: ${theme.COLORS.LIGHT_GREEN};
  `};
`;

export const SearchButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  margin-left: 4px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
