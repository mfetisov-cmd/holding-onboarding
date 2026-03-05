import React from 'react';

import { Doc24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24Colored/Doc24';
import { Pdf24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24Colored/Pdf24';
import { UnknownFile24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24Colored/UnknownFile24';
import { Xls24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24Colored/Xls24';
import { Xml24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24Colored/Xml24';

export type MimeTypeIconProps = {
  fileName?: string;
  mimeType: string;
  size?: number;
};

const getIconFromExtension = (fileName: string, size: number) => {
  const extension = fileName.split('.').pop()?.toLowerCase();

  switch (extension) {
    case 'pdf':
      return <Pdf24 size={size} />;
    case 'doc':
    case 'docx':
      return <Doc24 size={size} />;
    case 'xls':
    case 'xlsx':
      return <Xls24 size={size} />;
    case 'xml':
      return <Xml24 size={size} />;
    default:
      return null;
  }
};

export const MimeTypeIcon = ({
  fileName,
  mimeType,
  size = 24,
}: MimeTypeIconProps) => {
  // Normalize mime type to lowercase for comparison
  const normalizedMimeType = mimeType?.toLowerCase() || '';

  if (normalizedMimeType === 'application/pdf') {
    return <Pdf24 size={size} />;
  }
  if (
    normalizedMimeType === 'application/msword' ||
    normalizedMimeType ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    return <Doc24 size={size} />;
  }
  if (
    normalizedMimeType === 'application/vnd.ms-excel' ||
    normalizedMimeType ===
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ) {
    return <Xls24 size={size} />;
  }
  if (
    normalizedMimeType === 'application/xml' ||
    normalizedMimeType === 'text/xml'
  ) {
    return <Xml24 size={size} />;
  }

  // If mime type didn't match, try to determine from file extension
  if (fileName) {
    const iconFromExtension = getIconFromExtension(fileName, size);
    if (iconFromExtension) {
      return iconFromExtension;
    }
  }

  // Check for image types (show as unknown file for now, but could add image icon later)
  if (normalizedMimeType.startsWith('image/')) {
    return <UnknownFile24 size={size} />;
  }

  // Check for text files
  if (normalizedMimeType.startsWith('text/')) {
    return <UnknownFile24 size={size} />;
  }

  return <UnknownFile24 size={size} />;
};
