import styled, { css } from 'styled-components';

import {
  Button,
  PolymorphicButtonProps,
} from '@/shared/ui/vivid-ui/components/ButtonV2';
import { ArrowLeft24 } from '@/shared/ui/vivid-ui/components/Icons';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

const StyledButton = styled(Button)<
  PolymorphicButtonProps & { $mobileHeader?: boolean }
>`
  ${({ $mobileHeader, theme }) =>
    $mobileHeader &&
    css`
      height: ${theme.token.sizeUnits(20)};
      width: ${theme.token.sizeUnits(20)};
      flex-shrink: 0;
    `}
`;

type BackButtonProps = PolymorphicComponentProps<'button', {}> & {
  mobileHeader?: boolean;
};

export const BackButton = ({ mobileHeader, ...props }: BackButtonProps) => {
  return (
    <StyledButton
      $mobileHeader={mobileHeader}
      corners="fully-rounded"
      LeftIconComponent={ArrowLeft24}
      size={mobileHeader ? 'medium' : 'small'}
      tabIndex={-1}
      type="button"
      variant="secondary"
      {...props}
    />
  );
};
