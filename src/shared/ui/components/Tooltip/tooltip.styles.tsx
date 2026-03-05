import { PropsWithChildren } from 'react';

import styled, { keyframes } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  Typography,
  TypographyProps,
} from '@/shared/ui/vivid-ui/components/Typography';

export const StyledTooltipArrow = styled(Box)`
  position: absolute;
  width: 6rem;
  height: 6rem;

  /* Base positioning for different placements */
  *[data-popper-placement^='top'] > & {
    bottom: -5rem;
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    border-top: 6rem solid ${(props) => props.theme.token.color.c18};

    /* Fine-tune positioning - move slightly left */
    margin-left: -2rem;
  }

  *[data-popper-placement^='right'] > & {
    left: -5rem;
    border-top: 6rem solid transparent;
    border-bottom: 6rem solid transparent;
    border-right: 6rem solid ${(props) => props.theme.token.color.c18};

    /* Fine-tune positioning - move slightly up */
    margin-top: -2rem;
  }

  *[data-popper-placement^='bottom'] > & {
    top: -5rem;
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    border-bottom: 6rem solid ${(props) => props.theme.token.color.c18};

    /* Fine-tune positioning - move slightly left */
    margin-left: -2rem;
  }

  *[data-popper-placement^='left'] > & {
    right: -5rem;
    border-top: 6rem solid transparent;
    border-bottom: 6rem solid transparent;
    border-left: 6rem solid ${(props) => props.theme.token.color.c18};

    /* Fine-tune positioning - move slightly up */
    margin-top: -2rem;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }`;

export const StyledTooltip = styled.div<{ $zIndex?: number; open?: boolean }>`
  z-index: ${(props) => props.$zIndex || props.theme?.token.zIndex.popover};
  color: ${(props) => props.theme.token.color.c11};
  background-color: ${(props) => props.theme.token.color.c18};
  padding: ${(props) => props.theme.token.spacingS};
  border-radius: ${(props) => props.theme.token.sizeUnits(8)};
  animation: ${(props) => (props.open ? fadeIn : fadeOut)} 0.2s ease forwards;
`;

export const NoWrapText = styled(Typography)<
  PropsWithChildren<TypographyProps>
>`
  white-space: nowrap;
`;

export const Container = styled.div`
  display: inline-block;
`;
