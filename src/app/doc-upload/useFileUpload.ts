'use client';
import { useState, useCallback } from 'react';

export type UploadedFile = {
  id: number;
  name: string;
  size: number;
  status: 'uploading' | 'success' | 'error';
  progress: number;
};

export type FilesState = Record<string, UploadedFile[]>;

export function useFileUpload() {
  const [files, setFiles] = useState<FilesState>({});

  const addFile = useCallback((docKey: string, file: File) => {
    const entry: UploadedFile = {
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      status: 'uploading',
      progress: 0,
    };

    setFiles((prev) => ({
      ...prev,
      [docKey]: [...(prev[docKey] || []), entry],
    }));

    simulateUpload(docKey, entry.id);
  }, []);

  const simulateUpload = (docKey: string, fileId: number) => {
    let progress = 0;
    const iv = setInterval(() => {
      progress += Math.random() * 30 + 15;
      if (progress >= 100) {
        clearInterval(iv);
        setFiles((prev) => ({
          ...prev,
          [docKey]: (prev[docKey] || []).map((f) =>
            f.id === fileId ? { ...f, status: 'success', progress: 100 } : f,
          ),
        }));
      } else {
        setFiles((prev) => ({
          ...prev,
          [docKey]: (prev[docKey] || []).map((f) =>
            f.id === fileId ? { ...f, progress } : f,
          ),
        }));
      }
    }, 300);
  };

  const removeFile = useCallback((docKey: string, fileId: number) => {
    setFiles((prev) => ({
      ...prev,
      [docKey]: (prev[docKey] || []).filter((f) => f.id !== fileId),
    }));
  }, []);

  const hasAnyUploaded = Object.values(files).some((arr) =>
    arr.some((f) => f.status === 'success'),
  );

  const reset = useCallback(() => setFiles({}), []);

  return { files, addFile, removeFile, hasAnyUploaded, reset };
}
