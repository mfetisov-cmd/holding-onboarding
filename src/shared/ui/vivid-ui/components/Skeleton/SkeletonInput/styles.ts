import { css } from 'styled-components';
import styled from 'styled-components';

import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { StyledSkeleton } from '../styles';
import { SkeletonInputProps } from './SkeletonInput';

type StyledSkeletonInputProps = PrefixType<SkeletonInputProps, '$'>;

export const getStyledSkeletonInputSizeStyle = ({
  $size,
}: StyledSkeletonInputProps) => {
  switch ($size) {
    case 'large':
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusM};
      `;
    case 'medium':
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusS};
      `;
    case 'small':
    default:
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusXS};
      `;
  }
};

export const StyledSkeletonInput = styled(
  StyledSkeleton,
)<StyledSkeletonInputProps>`
  width: auto;
  ${getStyledSkeletonInputSizeStyle}
`;
