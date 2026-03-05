import { ReactNode } from 'react';

import { createQaIdAttribute } from '@utils/qaIds';
import { styled } from 'styled-components';

import { Ids } from '@/shared/model/constants/e2e/ids';
import { IconButton } from '@/shared/ui/components/IconButton';
import { Close24 } from '@/shared/ui/vivid-ui/components/Icons';

const StyledContainer = styled.div`
  height: 56rem;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: { token } }) => `${token.spacingS} ${token.spacingM}`};
  background-color: ${({ theme }) => theme.token.color.c0};
`;

type Props = {
  leftActions?: ReactNode;
  onClose?: () => void;
  rightActions?: ReactNode;
};

export const SideSheetHeader = ({
  leftActions,
  onClose,
  rightActions,
}: Props) => {
  return (
    <StyledContainer>
      <div>
        {leftActions || (
          <IconButton
            {...createQaIdAttribute(Ids.COMMON__SIDE_SHEET__CLOSE__BUTTON)}
            size="small"
            variant="secondary"
            onClick={onClose}
          >
            <Close24 size={16} />
          </IconButton>
        )}
      </div>
      <div>{rightActions}</div>
    </StyledContainer>
  );
};
