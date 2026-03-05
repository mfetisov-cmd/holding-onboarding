import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import {
  DropzoneOptions,
  DropzoneState,
  ErrorCode,
  FileRejection,
  useDropzone,
} from 'react-dropzone';

// TODO useAsyncFunction imported from outside of vivid-ui, think about moving it to vivid-ui or writing better implementation.
//  While component is in drafts - it is okay keep it like this.
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';

import { getDeduplicatedFileRejectionCodes } from './utils/getDeduplicatedFileRejectionCodes';
import { useDragEvents } from './utils/useDragEvents';

export type FileFieldContextValue = {
  dropzoneState?: DropzoneState & { isDragOnWindowActive?: boolean };
  error?: string;
  isLoading?: boolean;
};

export type FileFieldOptions = Omit<
  DropzoneOptions,
  'onDropAccepted' | 'onDropRejected'
>;

export type FileFieldContextProviderProps = {
  error?: string;
  fileFiledOptions: FileFieldOptions;
  fileRejectionCodeToLocalizedMessage: (rejectionCode: ErrorCode) => string;
  // file has been already uploaded
  isLoading?: boolean;
  onError: (errorMsg?: string) => void;
  onFiles: (files: File[]) => Promise<void> | void;
  // how many files already uploaded
  uploadedFilesCount?: number;
};

const FileFieldContext = createContext<FileFieldContextValue>({});

export const FileFieldContextProvider = ({
  children,
  error,
  fileFiledOptions,
  fileRejectionCodeToLocalizedMessage,
  isLoading,
  onError,
  onFiles,
  uploadedFilesCount = 0,
}: PropsWithChildren<FileFieldContextProviderProps>) => {
  const [isDragOnWindowActive, setIsDragOnWindowActive] = useState(false);

  const onFileState = useAsyncFunction(async (files: File[]) => onFiles(files));

  const handleFileErrors = useCallback(
    (fileRejections: Array<FileRejection>) => {
      onError(
        Array.from(getDeduplicatedFileRejectionCodes(fileRejections))
          .map(fileRejectionCodeToLocalizedMessage)
          .filter(Boolean)
          .join(', '),
      );
    },
    [onError, fileRejectionCodeToLocalizedMessage],
  );

  const handleFiles = async (files: File[]) => {
    onError(undefined);
    await onFileState.execute(files);
  };

  const dropzoneState = useDropzone({
    ...fileFiledOptions,
    maxFiles: fileFiledOptions?.maxFiles
      ? fileFiledOptions.maxFiles - uploadedFilesCount
      : undefined,
    onDropAccepted: handleFiles,
    onDropRejected: handleFileErrors,
  });

  useDragEvents({
    onEnd: () => setIsDragOnWindowActive(false),
    onStart: () => setIsDragOnWindowActive(true),
  });

  return (
    <FileFieldContext.Provider
      value={{
        dropzoneState: { ...dropzoneState, isDragOnWindowActive },
        error,
        isLoading: onFileState.isLoading || isLoading,
      }}
    >
      {children}
    </FileFieldContext.Provider>
  );
};

export const useFileFieldContext = () => {
  const context = useContext(FileFieldContext);
  if (context === undefined) {
    throw new Error(
      'useFileFieldContext must be used within FileFieldContextProvider',
    );
  }
  return context;
};
