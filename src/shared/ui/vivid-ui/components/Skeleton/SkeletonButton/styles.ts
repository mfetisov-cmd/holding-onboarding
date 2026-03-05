import { css } from 'styled-components';
import styled from 'styled-components';

import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { StyledSkeleton } from '../styles';
import { SkeletonButtonProps } from './SkeletonButton';

type StyledSkeletonButtonProps = PrefixType<SkeletonButtonProps, '$'>;

const getStyledSkeletonButtonSizeStyles = ({
  $size,
}: StyledSkeletonButtonProps) => {
  switch ($size) {
    case 'large':
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusM};
      `;
    case 'medium':
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusM};
      `;
    case 'small':
    default:
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusS};
      `;
  }
};
export const StyledSkeletonButton = styled(
  StyledSkeleton,
)<StyledSkeletonButtonProps>`
  width: auto;
  ${getStyledSkeletonButtonSizeStyles}
`;
