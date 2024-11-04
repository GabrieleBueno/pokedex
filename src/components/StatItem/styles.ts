import styled, { css } from 'styled-components/native';

import { darkenColor } from '@/utils';

interface ProgressProps {
  progress: number;
  bgColor: string;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const TitleContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.PRIMARY};
  `};
`;

export const StatValueContainer = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
`;

export const ProgressBar = styled.View`
  flex: 1;
  height: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 5px;
  overflow: hidden;
`;

export const Progress = styled.View<ProgressProps>`
  height: 8px;
  width: ${({ progress }) => `${progress}%`};
  background-color: ${({ bgColor }) => darkenColor(bgColor, 40)};
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-right: 4px;
`;
