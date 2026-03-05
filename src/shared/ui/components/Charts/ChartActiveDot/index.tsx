import { useEffect } from 'react';

import { useTheme } from 'styled-components';

type ChartActiveDotProps = {
  cx?: number;
  cy?: number;
  dataKey?: string;
  payload?: Record<string, unknown>;
  setActiveDotPos: (pos: { x: number; y: number }) => void;
};

export const ChartActiveDot = ({
  cx,
  cy,
  dataKey = 'balance',
  payload,
  setActiveDotPos,
}: ChartActiveDotProps) => {
  const theme = useTheme();

  useEffect(() => {
    setActiveDotPos({ x: cx!, y: cy! });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (payload?.[dataKey] === undefined) {
    return null;
  }

  return (
    <svg
      fill="none"
      height="13"
      width="13"
      x={cx! - 6.5}
      xmlns="http://www.w3.org/2000/svg"
      y={cy! - 6.5}
    >
      <path
        d="M6.508 12.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
        fill="#fff"
        fillOpacity="1"
        stroke="#fff"
        strokeOpacity="1"
      />
      <path
        d="M6.508 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
        fill={theme.token.color.c6l}
        fillOpacity="1"
        stroke={theme.token.color.c6}
        strokeOpacity="1"
        strokeWidth="2"
      />
    </svg>
  );
};
