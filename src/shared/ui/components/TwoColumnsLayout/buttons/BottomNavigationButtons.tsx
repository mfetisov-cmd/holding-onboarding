import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

import { createQaIdAttribute } from '@utils/qaIds';

import { OriginationIds } from '@/shared/model/constants/e2e/originationIds';
import { Button } from '@/shared/ui/vivid-ui/components/ButtonV2';
import { ArrowRight24 } from '@/shared/ui/vivid-ui/components/Icons';

import { StyledBottomNavigationButtons } from './styles';

export type BottomNavigationButtonsProps = {
  buttonsDirection?: CSSProperties['flexDirection'];
  disabled?: boolean;
  disableSecondarySubmit?: boolean;
  disableSubmit?: boolean;
  formId?: string;
  onSubmit?: () => Promise<void> | void;
  onSubmitSecondary?: () => Promise<void> | void;
  pending?: boolean;
  submitButtonType?: ButtonHTMLAttributes<unknown>['type'];
  submitContent?: ReactNode;
  submitContentSecondary?: ReactNode;
};

export const BottomNavigationButtons = ({
  buttonsDirection = 'row',
  disabled,
  disableSecondarySubmit,
  disableSubmit,
  formId,
  onSubmit,
  onSubmitSecondary,
  pending,
  submitButtonType = 'submit',
  submitContent,
  submitContentSecondary,
}: BottomNavigationButtonsProps) => {
  return (
    <StyledBottomNavigationButtons direction={buttonsDirection}>
      {submitContentSecondary && (
        <Button
          {...createQaIdAttribute(OriginationIds.SECONDARY_BUTTON)}
          disabled={disabled || disableSubmit || disableSecondarySubmit}
          fullWidth
          loading={pending}
          size="large"
          type="button"
          variant="secondary"
          onClick={onSubmitSecondary}
        >
          {submitContentSecondary}
        </Button>
      )}
      {submitContent && (
        <Button
          {...createQaIdAttribute(OriginationIds.PRIMARY_BUTTON)}
          disabled={disabled || disableSubmit}
          form={formId}
          fullWidth
          loading={pending}
          RightIconComponent={submitContentSecondary ? undefined : ArrowRight24}
          size="large"
          type={submitButtonType}
          onClick={onSubmit}
        >
          {submitContent}
        </Button>
      )}
    </StyledBottomNavigationButtons>
  );
};
