import { ReactElement } from 'react';

import { createQaIdAttribute } from '@utils/qaIds';

import { Ids } from '@/shared/model/constants/e2e/ids';

import { Close24 } from '../Icons';
import { Row } from '../Layout';
import { StyledPopupCloseButton, StyledPopupHeader } from './styles';

export type PopupHeaderProps = {
  closePopup: () => void;
  leftActions?: ReactElement<any>;
  showCloseBtn?: boolean;
  testId?: string;
};

export const PopupHeader = ({
  closePopup,
  leftActions,
  showCloseBtn,
  testId,
}: PopupHeaderProps) => {
  return (
    <StyledPopupHeader>
      <div>{leftActions}</div>
      {showCloseBtn && (
        <Row align="center" justify="flex-end">
          <StyledPopupCloseButton
            data-testid={testId ? `${testId}-close-btn` : ''}
            {...createQaIdAttribute(Ids.COMMON__POPUP__CLOSE_CROSS__BUTTON)}
            onClick={() => closePopup()}
          >
            <Close24 size={24} />
          </StyledPopupCloseButton>
        </Row>
      )}
    </StyledPopupHeader>
  );
};
