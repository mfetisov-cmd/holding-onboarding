import type { Meta, StoryFn } from '@storybook/react';

import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

import { Button } from '../Button';
import { Typography } from '../Typography';
import { PopupsContextProvider } from './context';
import { Popup, PopupProps } from './Popup';

const meta: Meta<typeof Popup> = {
  argTypes: {},
  component: Popup,
  tags: ['autodocs'],
};

export default meta;

const TemplatePopup = (args: PolymorphicComponentProps<'div', PopupProps>) => {
  const { children, closeOnClickOutside, showCloseBtn, testId, ...rest } = args;

  return (
    <Popup
      closeOnClickOutside={closeOnClickOutside}
      showCloseBtn={showCloseBtn}
      testId={testId}
      trigger={<Button>Open popup</Button>}
      {...rest}
    >
      {children}
    </Popup>
  );
};

const PopupContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24rem',
        width: '500rem',
      }}
    >
      <Typography variant="h4">Increase your chances test</Typography>
      <Typography variant="paragraphL">
        We promise, if in 3 months you use us and repay debts, we will increase
        your limit to € N
      </Typography>
      <div
        style={{
          display: 'grid',
          gap: '16rem',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <Button fullWidth>Primary Action</Button>
        <Button fullWidth variant="secondary">
          Action 2
        </Button>
      </div>
    </div>
  );
};

const Template: StoryFn<PolymorphicComponentProps<'div', PopupProps>> = (
  args,
) => (
  <PopupsContextProvider>
    <TemplatePopup {...args} />
  </PopupsContextProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: <PopupContent />,
};

export const WithCloseBtn = Template.bind({});
WithCloseBtn.args = {
  children: <PopupContent />,
  showCloseBtn: true,
  testId: 'popup',
};

export const WithDisabledOutsideClick = Template.bind({});
WithDisabledOutsideClick.args = {
  children: <PopupContent />,
  closeOnClickOutside: false,
  testId: 'popup',
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  children: <PopupContent />,
  fullScreen: true,
};
