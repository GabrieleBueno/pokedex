import styled, { css } from 'styled-components/native';

interface ContainerProps {
  hideSeparator: boolean;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  flex: 1;
  border-right-width: ${({ hideSeparator }) => (hideSeparator ? 0 : 1)}px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  margin-right: 4px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
  text-align: center;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};

  margin-bottom: 16px;
`;
