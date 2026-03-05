import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { Box, BoxProps } from '@/shared/ui/vivid-ui/components/Box';
import {
  PolymorphicComponentProps,
  PrefixType,
} from '@/shared/ui/vivid-ui/shared';

import { PopupProps } from './Popup';

export const StyledDialogContainer = styled(Box)<BoxProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledPopupOverlay = styled(motion.div)<
  BoxProps & { $zIndex?: number }
>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? ' rgba(255, 255, 255, 0.32)'
      : 'rgba(0, 0, 0, 0.32)'};
  z-index: ${(props) =>
    typeof props.$zIndex !== 'undefined'
      ? props.$zIndex
      : props.theme.token.zIndex.overlay};
`;

type StyledPopupProps = PrefixType<
  Pick<PopupProps, 'fullScreen' | 'zIndex'>,
  '$'
>;

const getPositionStyles = ({ $fullScreen }: StyledPopupProps) => {
  if ($fullScreen) {
    return css`
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `;
  }

  return css`
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 90%;
    border-top-left-radius: ${(props) => props.theme.token.borderRadiusL};
    border-top-right-radius: ${(props) => props.theme.token.borderRadiusL};

    @media (min-width: ${(props) => props.theme.token.breakPoints.tablet}) {
      top: 50%;
      bottom: auto;
      left: 50%;
      right: auto;
      transform: translate(-50%, -50%);
      border-radius: ${(props) => props.theme.token.borderRadiusM};
    }
  `;
};

export const StyledPopup = styled(motion.div)<
  PolymorphicComponentProps<'div', StyledPopupProps>
>`
  position: fixed;
  ${(props) =>
    props.$fullScreen
      ? css`
          display: flex;
          flex-direction: column;
        `
      : css`
          display: inline-block;
        `}
  padding: 0;
  color: ${(props) => props.theme.token.color.c1};
  background-color: ${(props) => props.theme.token.color.c0};
  overflow: auto;
  z-index: ${(props) =>
    typeof props.$zIndex !== 'undefined'
      ? props.$zIndex + props.theme.token.zIndex.modal
      : props.theme.token.zIndex.modal};
  ${getPositionStyles}
`;

const getContentPadding = ({
  $paddingSize,
}: PolymorphicComponentProps<
  'div',
  PrefixType<Pick<PopupProps, 'fullScreen' | 'paddingSize'>, '$'>
>) => {
  switch ($paddingSize) {
    case 'small': {
      return css`
        padding: ${({ theme }) =>
          `0 ${theme.token.spacingM} ${theme.token.spacingM}`};
      `;
    }
    case 'medium': {
      return css`
        padding: ${({ theme }) =>
          `0 ${theme.token.spacingXL} ${theme.token.spacingXL}`};
      `;
    }
    case 'large': {
      return css`
        padding: ${({ theme }) =>
          `0 ${theme.token.sizeUnits(24)} ${theme.token.sizeUnits(24)}`};
      `;
    }
  }
};

export const StyledPopupContent = styled(Box)<
  PolymorphicComponentProps<
    'div',
    PrefixType<Pick<PopupProps, 'fullScreen' | 'paddingSize'>, '$'>
  >
>`
  width: ${(props) => (props.$fullScreen ? '100%' : 'auto')};
  ${(props) =>
    props.$fullScreen
      ? css`
          flex-grow: 1;
        `
      : undefined}
  ${getContentPadding}
`;

export const StyledPopupHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.token.spacingS};
`;

export const StyledPopupCloseButton = styled.button`
  width: 24rem;
  height: 24rem;
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  fill: ${(props) => props.theme.token.color.c3};
  cursor: pointer;

  &:focus {
    outline: 1px solid ${(props) => props.theme.token.color.c6};
  }
`;
