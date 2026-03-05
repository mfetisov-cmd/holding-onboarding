import { RefAttributes, useEffect, useMemo, useRef } from 'react';

import { styled } from 'styled-components';

import { useScrollToElement } from '@/shared/ui/vivid-ui/components/ScrollToFirstProvider';
import {
  PolymorphicTypographyProps,
  Typography,
} from '@/shared/ui/vivid-ui/components/Typography';

import {
  FileFieldContextProvider,
  FileFieldContextProviderProps,
  useFileFieldContext,
} from './FileFieldContext';
import { FileFieldView, FileFieldViewTexts } from './FileFieldView';

const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;
`;

const StyledErrorHint = styled(Typography)<PolymorphicTypographyProps>`
  color: ${(props) => props.theme.token.color.c8};
  padding: ${(props) => `${props.theme.token.sizeUnits(4)} 0`};
`;

type WrappedFieldProps = RefAttributes<HTMLInputElement> & {
  texts: {
    default: FileFieldViewTexts;
    dragActive: FileFieldViewTexts;
    loading: FileFieldViewTexts;
  };
};

const WrapperFileField = ({ ref, texts }: WrappedFieldProps) => {
  const { dropzoneState, error, isLoading } = useFileFieldContext();

  const isActive = useMemo(
    () =>
      dropzoneState?.isFocused ||
      dropzoneState?.isDragActive ||
      dropzoneState?.isDragOnWindowActive ||
      dropzoneState?.isDragAccept ||
      dropzoneState?.isFileDialogActive,
    [dropzoneState],
  );

  const { label, title } = useMemo(() => {
    if (isLoading) {
      return texts.loading;
    }

    if (isActive) {
      return texts.dragActive;
    }

    return texts.default;
  }, [isActive, isLoading, texts]);

  return (
    <StyledContainer>
      <StyledContainer>
        <input {...dropzoneState?.getInputProps()} />
        <FileFieldView
          {...dropzoneState?.getRootProps()}
          isActive={isActive}
          isLoading={isLoading}
          label={label}
          title={title}
        />
      </StyledContainer>
      {error ? (
        <StyledErrorHint ref={ref} variant="bodyS">
          {error}
        </StyledErrorHint>
      ) : null}
    </StyledContainer>
  );
};

type Props = FileFieldContextProviderProps & WrappedFieldProps;

export const FileField = ({
  error,
  fileFiledOptions,
  fileRejectionCodeToLocalizedMessage,
  isLoading,
  onError,
  onFiles,
  texts,
  uploadedFilesCount,
}: Props) => {
  const localRef = useRef<HTMLInputElement | null>(null);
  const scrollToElement = useScrollToElement();
  // Scroll to element on error
  useEffect(() => {
    if (error) {
      scrollToElement(localRef?.current ?? undefined);
    }
  }, [error, scrollToElement]);

  return (
    <FileFieldContextProvider
      error={error}
      fileFiledOptions={fileFiledOptions}
      fileRejectionCodeToLocalizedMessage={fileRejectionCodeToLocalizedMessage}
      isLoading={isLoading}
      uploadedFilesCount={uploadedFilesCount}
      onError={onError}
      onFiles={onFiles}
    >
      <WrapperFileField ref={localRef} texts={texts} />
    </FileFieldContextProvider>
  );
};
