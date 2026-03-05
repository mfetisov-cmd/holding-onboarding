import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { getStyledInputSizeStyle } from '@/shared/ui/vivid-ui/components/Input/styles';
import { Paper } from '@/shared/ui/vivid-ui/components/Paper';
import { Size } from '@/shared/ui/vivid-ui/shared';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { SelectProps } from './Select';

type StyledSelectProps = PrefixType<
  Pick<SelectProps, 'disabled' | 'hint' | 'maxItems' | 'size'>,
  '$'
>;

type StyledSelectOptionsListContainerProps = PrefixType<
  Pick<SelectProps, 'hint' | 'orientation'>,
  '$'
>;

export const StyledArrowIcon = styled.div<{ $disabled?: boolean }>`
  fill: ${(props) => props.theme.token.color.c3};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};

  &:hover {
    fill: ${(props) => props.theme.token.color.c1};
  }
`;

export const StyledSelect = styled(Box)<StyledSelectProps>`
  position: relative;

  &:hover ${StyledArrowIcon} {
    fill: ${(props) =>
      props.$disabled
        ? props.theme.token.color.c3
        : props.theme.token.color.c1};
  }
`;

export const StyledSelectOptionsListContainer = styled.div<StyledSelectOptionsListContainerProps>`
  position: absolute;
  z-index: ${(props) => props.theme.token.zIndex.popover};
  ${(props) => {
    if (props.$orientation === 'up') {
      return `
        bottom: ${props.$hint ? 'calc(100% - 22rem)' : '100%'};
        flex-direction: column-reverse;
      `;
    } else {
      return `
        top: ${props.$hint ? 'calc(100% - 22rem)' : '100%'};
        flex-direction: column;
      `;
    }
  }}
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
`;

export const StyledLoaderContainer = styled(Paper)`
  height: 100rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input<StyledSelectProps>`
  &:read-only {
    caret-color: transparent;
    cursor: default;
  }
`;

export const StyledRightIcon = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.token.spacingXS};
`;

export const StyledNativeSelect = styled.select`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: transparent;

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;

export const StyledNativeSelectValue = styled.div<{
  $disabled?: boolean;
  $size?: Size;
}>`
  line-height: normal;
  color: ${(props) =>
    props.$disabled ? props.theme.token.color.c2 : props.theme.token.color.c1};
  ${getStyledInputSizeStyle}
`;
