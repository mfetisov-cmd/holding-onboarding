import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import { Button } from '@/shared/ui/vivid-ui/components/Button';

import { Tooltip } from './index';

const meta: Meta<typeof Tooltip> = {
  argTypes: {
    component: {
      control: false,
    },
  },
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          'Wraps its `children` and shows tooltip with `content` on hover',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const TooltipDemoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100rem;
`;

const MessageContainer = styled.span`
  white-space: nowrap;
`;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: 'Some content with tooltip',
    content: 'Tooltip content',
  },
  render: (args) => {
    return (
      <TooltipDemoContainer>
        <Tooltip {...args} />
      </TooltipDemoContainer>
    );
  },
};

export const ButtonWithTooltip: Story = {
  args: {
    children: <Button>Hover me</Button>,
    content: 'I have tooltip for you',
  },
  render: (args: any) => {
    return (
      <TooltipDemoContainer>
        <Tooltip
          {...args}
          content={<MessageContainer>{args.content}</MessageContainer>}
        />
      </TooltipDemoContainer>
    );
  },
};
