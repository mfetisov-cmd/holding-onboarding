import { useState } from 'react';

import * as Sentry from '@sentry/nextjs';

import { withTracing } from '@/shared/services/grpc/asAsync/helpers';
import { createMeta } from '@/shared/services/grpc/client/utils';

export const buildFileUrlInFileService = (fileId: string) => {
  return `/api/fileservice/files/${fileId}`;
};

export function useFileDownloader() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFileNameFromHeaders = (headers: Headers): string | undefined => {
    const contentDisposition = headers.get('content-disposition');

    if (contentDisposition) {
      try {
        const matchedFilename = contentDisposition
          .split(/(filename\*=UTF-8''|filename=["]*)/gi)[2]
          .split(/"?$/gi)?.[0];

        // Possible values
        // inline; filename="Transfer confirmation 4694b5ce.pdf"
        // inline; filename=DE03202208000000764670_account_confirmation.pdf
        // inline; filename="Statement DE03202208000000764670 2024-11-07 - 2024-11-08.pdf"
        // inline; filename*=utf-8''Vivid%20Business%20documents%20%E2%80%93%2001-11-2024-08-11-2024.zip

        return matchedFilename
          ? decodeURIComponent(matchedFilename)
          : matchedFilename;
      } catch (error) {
        Sentry.captureMessage(
          `Failed to parse filename from contentDisposition header`,
          {
            fingerprint: [
              'Failed to parse filename from contentDisposition header',
            ],
            level: 'error',
          },
        );
        return undefined;
      }
    }
    return undefined;
  };

  const downloadFileFromMemory = async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      const downloadUrl = window.URL.createObjectURL(file);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(downloadUrl);
      link.remove();

      setIsLoading(false);
    } catch (err) {
      setError(err as any);
      setIsLoading(false);
    }
  };

  const downloadFile = async (url: string, defaultFileName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const meta = withTracing(createMeta());
      const headers: Record<string, string> = {};

      meta.toHeaders().forEach((value, key) => {
        headers[key] = value;
      });

      const response = await fetch(url, {
        headers,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const resultFilename =
        getFileNameFromHeaders(response.headers) || defaultFileName;

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = resultFilename;
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(downloadUrl);
      link.remove();

      setIsLoading(false);
    } catch (err) {
      setError(err as any);
      setIsLoading(false);
    }
  };

  const downloadFileToMemory = async (url: string, defaultFileName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const meta = withTracing(createMeta());
      const headers: Record<string, string> = {};

      meta.toHeaders().forEach((value, key) => {
        headers[key] = value;
      });

      const response = await fetch(url, {
        headers,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const resultFilename =
        getFileNameFromHeaders(response.headers) || defaultFileName;

      const blob = await response.blob();

      const file = new File([blob], resultFilename, {
        type: response.headers.get('content-type') || '',
      });

      setIsLoading(false);
      return file;
    } catch (err) {
      setError(err as any);
      setIsLoading(false);
    }
  };

  return {
    downloadFile,
    downloadFileFromMemory,
    downloadFileToMemory,
    error,
    isLoading,
  };
}
