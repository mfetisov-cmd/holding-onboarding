import { isFuture, isValid } from 'date-fns';
import { useTheme } from 'styled-components';

type Point = {
  x: number;
  y: number;
};

type PayloadItem = {
  payload: {
    [key: string]: unknown;
    date: string;
  };
};

type ChartCursorProps = {
  activeDotPos: {
    x: number;
    y: number;
  };
  height?: number;
  payload?: PayloadItem[];
  points?: Point[];
  stroke?: string;
  width?: number;
};

export const ChartCursor = (props: ChartCursorProps) => {
  const { activeDotPos, payload, points } = props;
  const theme = useTheme();

  if (payload && payload.length > 0) {
    const dataPoint = payload[0]?.payload;

    if (!dataPoint || !dataPoint.date) {
      return null;
    }

    const date = new Date(dataPoint.date);

    if (!isValid(date) || isFuture(date)) {
      return null;
    }
  }

  if (!points || points.length < 2) {
    return null;
  }

  const startingPoint = points[0];
  const endingPoint = points[1];

  if (
    !startingPoint ||
    !endingPoint ||
    typeof startingPoint.x !== 'number' ||
    typeof startingPoint.y !== 'number' ||
    typeof endingPoint.x !== 'number' ||
    typeof endingPoint.y !== 'number'
  ) {
    return null;
  }

  const [x1, y1] = [startingPoint.x, activeDotPos.y + 10];
  const [x2, y2] = [endingPoint.x, endingPoint.y];

  return (
    <svg x1={x1} x2={x2} y1={y1} y2={y2}>
      <line
        stroke={theme.token.color.c6}
        strokeWidth={1}
        x1={x1}
        x2={x2}
        y1={y1}
        y2={y2}
      />
    </svg>
  );
};
