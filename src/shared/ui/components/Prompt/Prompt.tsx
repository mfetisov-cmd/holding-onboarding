'use client';
import {
  ComponentProps,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
} from 'react';

import { createQaIdAttribute } from '@utils/qaIds';
import { QrCode } from 'src/shared/ui/components/QrCode';
import { useTheme } from 'styled-components';

import { Ids } from '@/shared/model/constants/e2e/ids';
import {
  CommonImage,
  CommonImageName,
} from '@/shared/ui/components/CommonImage';
import {
  Button,
  ButtonProps,
  PolymorphicButtonProps,
} from '@/shared/ui/vivid-ui/components/ButtonV2';
import { Popup } from '@/shared/ui/vivid-ui/components/Popup';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import { useThemeBreakpoints } from '@/shared/ui/vivid-ui/hooks';

import {
  ButtonGroup,
  Content,
  StyledImageContainer,
  TextGroup,
} from './Prompt.styles';

const DEFAULT_IMAGE_SIZE = 160;

type PromptBaseButtonProps = Omit<
  PolymorphicButtonProps,
  'children' | 'corners' | 'LeftIconComponent' | 'RightIconComponent' | 'size'
> & {
  label: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};

export type PromptProps = {
  closeButton?: PromptBaseButtonProps;
  closeOnClickOutside?: boolean;
  description?: ReactNode;
  discardButton?: PromptBaseButtonProps;
  hideCloseButton?: boolean;
  hint?: ReactNode;
  image?: CommonImageName;
  onClose?: () => void;
  onDiscard?: () => void;
  onSubmit?: () => void;
  open: boolean;
  qrData?: ComponentProps<typeof QrCode>;
  submitButton?: PromptBaseButtonProps;
  title: ReactNode;
  zIndex?: number;
};

export const Prompt = ({
  children,
  closeButton,
  closeOnClickOutside,
  description,
  discardButton,
  hideCloseButton = false,
  hint,
  image,
  onClose,
  onDiscard,
  onSubmit,
  open,
  qrData,
  submitButton,
  title,
  zIndex,
}: PropsWithChildren<PromptProps>) => {
  const theme = useTheme();
  const breakpoints = useThemeBreakpoints();

  const handleClose = (e?: MouseEvent<HTMLButtonElement>) => {
    closeButton?.onClick?.(e);
    onClose?.();
  };

  const handleDiscard = (e?: MouseEvent<HTMLButtonElement>) => {
    discardButton?.onClick?.(e);
    onDiscard?.();
  };

  const handleSubmit = () => {
    submitButton?.onClick?.();
    onSubmit?.();
  };

  const commonButtonProps = {
    fullWidth: true,
    size: 'medium',
  } satisfies ButtonProps;

  return (
    <Popup
      closeOnClickOutside={closeOnClickOutside}
      open={open}
      paddingSize="small"
      showCloseBtn={!hideCloseButton && !breakpoints.isMobile}
      zIndex={zIndex}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <Content>
        {image && (
          <StyledImageContainer>
            <CommonImage image={image} size={DEFAULT_IMAGE_SIZE} />
          </StyledImageContainer>
        )}

        {qrData && (
          <StyledImageContainer>
            <QrCode
              data={qrData.data}
              size={qrData.size || DEFAULT_IMAGE_SIZE}
            />
          </StyledImageContainer>
        )}

        <TextGroup>
          <Typography
            {...createQaIdAttribute(Ids.COMMON__PROMPT__TITLE__TEXT)}
            variant="h6"
          >
            {title}
          </Typography>
          <Typography color={theme.token.color.c2} variant="paragraphS">
            {description}
          </Typography>
        </TextGroup>

        {children}

        <ButtonGroup>
          {submitButton && (
            <Button
              {...createQaIdAttribute(Ids.COMMON__PROMPT__SUBMIT__BUTTON)}
              {...commonButtonProps}
              {...submitButton}
              variant={submitButton.variant ?? 'primary'}
              onClick={handleSubmit}
            >
              {submitButton.label}
            </Button>
          )}
          {discardButton && (
            <Button
              {...createQaIdAttribute(Ids.COMMON__PROMPT__DISCARD__BUTTON)}
              {...commonButtonProps}
              {...discardButton}
              variant={discardButton.variant ?? 'secondary'}
              onClick={handleDiscard}
            >
              {discardButton.label}
            </Button>
          )}
          {closeButton && (
            <Button
              {...createQaIdAttribute(Ids.COMMON__PROMPT__CLOSE__BUTTON)}
              {...commonButtonProps}
              {...closeButton}
              variant={closeButton.variant ?? 'secondary'}
              onClick={handleClose}
            >
              {closeButton.label}
            </Button>
          )}
        </ButtonGroup>
        {hint && (
          <>
            <Spacer size={3} />
            <TextGroup>
              <Typography color={theme.token.color.c2} variant="bodyXS">
                {hint}
              </Typography>
            </TextGroup>
          </>
        )}
      </Content>
    </Popup>
  );
};
