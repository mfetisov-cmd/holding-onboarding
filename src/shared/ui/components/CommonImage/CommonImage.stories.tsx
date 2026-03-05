import type { Meta, StoryObj } from '@storybook/react';

import { CommonImage, CommonImageName } from './index';

const meta: Meta<typeof CommonImage> = {
  argTypes: {},
  component: CommonImage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CommonImage>;

export const Default: Story = {
  args: {
    height: 100,
    image: CommonImageName.flash,
    width: 100,
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {Object.keys(CommonImageName).map((image) => (
        <CommonImage
          height={100}
          image={image as CommonImageName}
          key={image}
          width={100}
        />
      ))}
    </div>
  ),
};
