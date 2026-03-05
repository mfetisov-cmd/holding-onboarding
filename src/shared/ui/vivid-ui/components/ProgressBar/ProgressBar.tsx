import { styled, useTheme } from 'styled-components';

import { PrefixType } from '@/shared/ui/vivid-ui/shared';

type ProgressIndicatorProps = {
  indicatorColor?: string;
  total?: number;
  value: number;
};

type ProgressBarProps = ProgressIndicatorProps & {
  className?: string;
};

const ProgressContainer = styled.div`
  height: ${(props) => props.theme.token.sizeUnits(1)};
  width: 100%;
  background-color: ${(props) => props.theme.token.color.c5};
`;

const ProgressIndicator = styled.div<
  PrefixType<Required<ProgressIndicatorProps>, '$'>
>`
  height: 100%;
  width: ${(props) => Math.round((props.$value / props.$total) * 100)}%;
  background-color: ${({ $indicatorColor }) => $indicatorColor};
`;

/**
 * A progress bar component used for visualizing progress during long-running processes.
 * @param total - The total value of the progress bar (default is 100).
 * @param value - The current value of the progress bar.
 * @param className - The class name of the progress bar.
 */
export const ProgressBar = ({
  className,
  indicatorColor,
  total = 100,
  value,
}: ProgressBarProps) => {
  const theme = useTheme();

  return (
    <ProgressContainer className={className}>
      <ProgressIndicator
        $indicatorColor={indicatorColor || theme.token.color.c9}
        $total={total}
        $value={value}
      />
    </ProgressContainer>
  );
};
