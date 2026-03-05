import type { Meta, StoryObj } from '@storybook/react';

import { ComponentProps, useEffect, useState } from 'react';

import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';

import { FileField } from './FileField';

const StateFullFileField = (args: ComponentProps<typeof FileField>) => {
  const [error, setError] = useState<string | undefined>(args.error);
  const [files, setFiles] = useState<File[]>([]);

  const handleError = (msg?: string) => {
    setError(msg);
    args.onError(msg);
  };

  const handleFiles = async (files: File[]) => {
    setFiles(files);
    await args.onFiles(files);
  };

  useEffect(() => {
    setError(args.error);
  }, [args.error]);

  return (
    <div>
      <FileField
        {...args}
        error={error}
        onError={handleError}
        onFiles={handleFiles}
      />
      <Spacer size={2} />
      <div>{files.map((it) => it.name).join(', ')}</div>
    </div>
  );
};

const meta: Meta<typeof StateFullFileField> = {
  argTypes: {},
  component: StateFullFileField,
  tags: ['autodocs'],
};

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default meta;

type Story = StoryObj<typeof StateFullFileField>;

export const Default: Story = {
  args: {
    fileFiledOptions: {
      accept: {
        'image/jpeg': ['.jpg', '.jpeg'],
      },
      // size in bytes
      maxSize: 2 * 1024 * 1024,
    },
    fileRejectionCodeToLocalizedMessage: String,
    onError: (msg?: string) => msg && console.log(msg),
    onFiles: async (_) => {
      await wait(3000);
    },
    texts: {
      default: { label: 'Field label', title: 'Field title' },
      dragActive: { label: 'Drag active label', title: 'Drag active title' },
      loading: { label: 'Loading label', title: 'Loading title' },
    },
  },
};
