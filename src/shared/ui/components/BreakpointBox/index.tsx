import React, { CSSProperties } from 'react';

import { css, styled } from 'styled-components';

import { PrefixType } from '@/shared/ui/vivid-ui/shared';

type Props = {
  children: React.ReactNode;
  className?: string;
  display?: CSSProperties['display'];
  showAfter?: string;
  showBefore?: string;
};

type StyledBreakpointBoxProps = PrefixType<
  Pick<Props, 'display' | 'showAfter' | 'showBefore'>,
  '$'
>;

const getStyles = ({
  $display = 'block',
  $showAfter,
  $showBefore,
}: StyledBreakpointBoxProps) => {
  if ($showAfter) {
    return css`
      @media (min-width: ${$showAfter}) {
        display: ${$display};
      }
    `;
  }
  if ($showBefore) {
    const px = parseInt($showBefore) - 1;
    return css`
      @media (max-width: ${px}px) {
        display: ${$display};
      }
    `;
  }
  return '';
};

const StyledBreakpointBox = styled.div<StyledBreakpointBoxProps>`
  display: none;
  ${(props) => getStyles(props)}
`;

export const BreakpointBox = ({
  children,
  className,
  display,
  showAfter,
  showBefore,
}: Props) => {
  return (
    <StyledBreakpointBox
      $display={display}
      $showAfter={showAfter}
      $showBefore={showBefore}
      className={className}
    >
      {children}
    </StyledBreakpointBox>
  );
};
