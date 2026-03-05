import { ErrorCode, FileRejection } from 'react-dropzone';

const stringToValidErrorCode = (
  errorCodeString?: string,
): ErrorCode | undefined => {
  return Object.values(ErrorCode).find((code) => code === errorCodeString);
};

export const getDeduplicatedFileRejectionCodes = (
  fileRejections: FileRejection[],
) => {
  const codes = new Set<ErrorCode>();

  fileRejections.forEach((fr) => {
    fr.errors.forEach((e) => {
      const errorCode = stringToValidErrorCode(e.code);
      if (errorCode) {
        codes.add(errorCode);
      }
    });
  });

  return codes;
};
