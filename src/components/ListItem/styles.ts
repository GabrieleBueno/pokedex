import styled, { css } from 'styled-components/native';

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const Identification = styled.Text`
  margin-top: 4px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_300};
  `};
`;
