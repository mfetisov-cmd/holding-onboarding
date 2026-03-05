import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { CommonSegmentUnitProps } from './SegmentUnit';

type StyledSegmentUnitProps = PrefixType<
  Pick<CommonSegmentUnitProps, 'checked' | 'disabled'>,
  '$'
> & {
  $focused?: boolean;
};

const getStyledSegmentUnitColorStyle = ({
  $checked,
  $disabled,
  $focused,
}: StyledSegmentUnitProps) => {
  if ($disabled) {
    return css`
      background-color: ${(props) => props.theme.token.color.c5};
    `;
  }

  return css`
    background-color: ${(props) =>
      $checked ? props.theme.token.color.c6 : 'transparent'};
    border-color: ${(props) =>
      $checked || $focused ? props.theme.token.color.c6 : 'transparent'};
    box-shadow: ${$checked ? '0 2px 5px rgba(33, 34, 36, 0.17)' : 'none'};

    &:hover {
      background: ${(props) =>
        $checked
          ? `linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), ${props.theme.token.color.c6}`
          : `linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), ${props.theme.token.color.c5}`};
    }
  `;
};

export const StyledSegmentUnit = styled(Box)<StyledSegmentUnitProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  min-height: 44rem;
  padding: ${({ theme }) => `0 ${theme.token.spacingS}`};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: ${(props) => props.theme.token.borderRadiusS};

  ${getStyledSegmentUnitColorStyle}
  &:active {
    border-color: transparent;
  }
`;

const getStyledSegmentUnitLabelColorStyle = ({
  $checked,
  $disabled,
}: StyledSegmentUnitProps) => {
  if ($disabled) {
    return css`
      color: ${(props) => props.theme.token.color.c3};
    `;
  }
  if ($checked) {
    return css`
      color: ${(props) => props.theme.token.color.c0};
    `;
  }
  return css`
    color: ${(props) => props.theme.token.color.c1};
  `;
};

export const StyledSegmentUnitLabel = styled(Box)<StyledSegmentUnitProps>`
  display: inline-block;
  font: ${(props) => props.theme.token.font.paragraphM};
  ${getStyledSegmentUnitLabelColorStyle}
`;

export const StyledSegmentUnitNativeInput = styled(Box)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  border: none;
  padding: 0;
  margin: 0;
`;
