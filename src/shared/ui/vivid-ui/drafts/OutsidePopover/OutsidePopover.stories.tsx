import type { Meta, StoryFn } from '@storybook/react';

import { useRef, useState } from 'react';

import { Button } from '../../components/ButtonV2';
import { OutsidePopover, OutsidePopoverProps } from './OutsidePopover';

const meta: Meta<typeof OutsidePopover> = {
  argTypes: {},
  component: OutsidePopover,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof OutsidePopover> = (
  args: OutsidePopoverProps,
) => {
  const positionRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Button ref={positionRef} onClick={handleClick}>
        Click me to show Popover
      </Button>

      <OutsidePopover
        {...args}
        nonClosingRefList={[positionRef]}
        open={open}
        positionRef={positionRef}
        onClose={() => setOpen(false)}
      >
        Popover content
      </OutsidePopover>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
