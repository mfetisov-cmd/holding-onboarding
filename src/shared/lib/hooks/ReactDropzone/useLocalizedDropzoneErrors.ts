import { DropzoneOptions, ErrorCode, FileRejection } from 'react-dropzone';

import { useTranslations } from 'next-intl';

import { formatFileSize } from '@/shared/lib/utils/format/fileSize';

type FileRejectionWithRequiredError = Partial<FileRejection> & {
  errors: FileRejection['errors'];
};

const getDeduplicatedFileExtensions = (accept: Record<string, string[]>) => {
  const extensions = new Set<string>();

  Object.values(accept).forEach((value) => {
    value.forEach((f) => extensions.add(f));
  });

  return Array.from(extensions.values());
};

export const useLocalizedDropzoneErrors = (
  options: DropzoneOptions,
  supportedFormats?: string,
) => {
  const t = useTranslations('common.dropzone.error_codes');

  const getErrorMessageByCode = (errorCode: ErrorCode) => {
    switch (errorCode) {
      case ErrorCode.FileInvalidType: {
        return t('file_invalid_type', {
          supportedFormats:
            supportedFormats ||
            getDeduplicatedFileExtensions(options?.accept || {}).join(', '),
        });
      }
      case ErrorCode.FileTooLarge: {
        const maxSize = options?.maxSize || 0;
        return t('file_is_too_large', { maxSize: formatFileSize(maxSize) });
      }
      case ErrorCode.FileTooSmall: {
        const minSize = options?.minSize || 0;
        return t('file_is_too_small', { minSize: formatFileSize(minSize) });
      }
      case ErrorCode.TooManyFiles: {
        const maxFiles = options?.maxFiles || 0;
        return t('too_many_files', { maxFiles });
      }
    }
  };

  const getErrorMessage = (
    fileRejections: Array<FileRejectionWithRequiredError>,
  ): string => {
    const errorTypes = fileRejections.reduce(
      (errorTypesArray: Array<ErrorCode>, fileRejection) => {
        errorTypesArray.push(
          ...fileRejection.errors.map((error) => error.code as ErrorCode),
        );
        return errorTypesArray;
      },
      [],
    );

    return errorTypes.map(getErrorMessageByCode).join(', ');
  };

  return { getErrorMessage, getErrorMessageByCode };
};
