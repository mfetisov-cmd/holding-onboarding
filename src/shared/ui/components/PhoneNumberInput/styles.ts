import { PropsWithChildren } from 'react';

import { styled } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  DropList,
  DropListProps,
} from '@/shared/ui/vivid-ui/components/DropList';
import {
  IconView,
  IconViewProps,
} from '@/shared/ui/vivid-ui/components/IconView';

export const StyledPhoneNumberBox = styled(Box)`
  display: flex;
  gap: ${(props) => props.theme.token.spacingXS};
`;

export const StyledSelectBox = styled(Box)`
  position: relative;
  width: 155rem;
  flex-shrink: 0;
`;

export const StyledIconView = styled(IconView)<
  PropsWithChildren<IconViewProps>
>`
  border-radius: ${(props) => props.theme.token.sizeUnits(20)};
`;

export const StyledListBox = styled(Box)`
  position: absolute;
  z-index: ${(props) => props.theme.token.zIndex.popover};
  top: 100%;
  left: 0;
`;

export const StyledListItemTitle = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledListItemCode = styled(Box)`
  min-width: 56rem;
`;

export const StyledListItemCountry = styled(Box)`
  color: ${(props) => props.theme.token.color.c2};
`;

export const StyledInputBox = styled(Box)`
  flex: 1 1 100%;
`;

export const StyledDropList = styled(DropList)<DropListProps>`
  overflow-y: auto !important;
  max-height: 260rem;
  min-width: 260rem;
`;
