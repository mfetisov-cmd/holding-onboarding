import React from 'react';

import styled, { useTheme } from 'styled-components';

type CircularProgressProps = {
  children?: React.ReactNode;
  percent: number;
  size?: number;
  strokeColor?: string;
};

export const CircularProgress = ({
  children,
  percent,
  size = 40,
  strokeColor,
}: CircularProgressProps) => {
  const theme = useTheme();
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const progress = Math.min(1, Math.max(0, percent / 100));
  
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = `${circumference - progress * circumference}`;

  return (
    <CircularProgressContainer $size={size}>
      <CircularProgressSvg $size={size}>
        <CircularProgressBgCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={theme.token.color.c4}
          strokeWidth={strokeWidth}
        />
        {progress > 0 && (
          <CircularProgressForegroundCircle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={strokeColor || theme.token.color.c6}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeWidth={strokeWidth}
          />
        )}
      </CircularProgressSvg>
      {children && <CircularProgressContent>{children}</CircularProgressContent>}
    </CircularProgressContainer>
  );
};

const CircularProgressContainer = styled.div<{ $size: number }>`
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircularProgressSvg = styled.svg<{ $size: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  transform: rotate(-90deg);
`;

const CircularProgressBgCircle = styled.circle`
  fill: none;
`;

const CircularProgressForegroundCircle = styled.circle`
  fill: none;
  stroke-linecap: round;
`;

const CircularProgressContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
