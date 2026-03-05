import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { CommonImageName } from '@/shared/ui/components/CommonImage';

import { Prompt, PromptProps } from './Prompt';

const meta: Meta<typeof Prompt> = {
  argTypes: {},
  component: Prompt,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Prompt>;

const PromptWrapper = (args: PromptProps) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>open</button>
      <Prompt {...args} open={isOpened} onClose={() => setIsOpened(false)} />
    </>
  );
};

export const DefaultStory: Story = {
  args: {
    closeButton: { disabled: false, label: 'Close' },
    description: 'Description',
    image: CommonImageName.sun,
    submitButton: { disabled: false, label: 'Submit', loading: false },
    title: 'Title',
  },
  render: (args) => {
    return <PromptWrapper {...args} />;
  },
};
