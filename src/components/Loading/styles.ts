import styled from 'styled-components/native';

export const Container = styled.View``;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.PRIMARY,
}))`
  height: 30px;
  width: 30px;
`;
