import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.PRIMARY,
}))`
  height: 30px;
  width: 30px;
`;
