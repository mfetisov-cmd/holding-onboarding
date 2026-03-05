import type { Meta, StoryObj } from '@storybook/react';

import { DefaultTheme } from '../DefaultThemeProvider';
import { Divider } from '../Divider';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  argTypes: {
    component: {
      description:
        'Pass specific HTMLElementType if you dont want it to be selected according to the variant prop\n\n\n',
    },
    variant: {
      control: { type: 'select' },
      options: Object.keys(DefaultTheme.token.font),
    },
  },
  component: Typography,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Typography',
    variant: 'h1',
  },
};

export const Heading: Story = {
  render: () => (
    <>
      <Typography variant="h1">Heading H1</Typography>
      <Divider />
      <Typography variant="h2">Heading H2</Typography>
      <Divider />
      <Typography variant="h3">Heading H3</Typography>
      <Divider />
      <Typography variant="h4">Heading H4</Typography>
      <Divider />
      <Typography variant="h5">Heading H5</Typography>
      <Divider />
      <Typography variant="h6">Heading H6</Typography>
      <Divider />
      <Typography variant="h7">Heading H7</Typography>
    </>
  ),
};

export const Label: Story = {
  render: () => (
    <>
      <Typography variant="labelLAcc">Label L Acc</Typography>
      <Divider />
      <Typography variant="labelL">Label L</Typography>
      <Divider />
      <Typography variant="labelMAcc">Label M Acc</Typography>
      <Divider />
      <Typography variant="labelM">Label M</Typography>
      <Divider />
      <Typography variant="labelSAcc">Label S Acc</Typography>
      <Divider />
      <Typography variant="labelS">Label S</Typography>
    </>
  ),
};

export const Body: Story = {
  render: () => (
    <>
      <div>
        <Typography variant="bodyLAcc">Body L Acc</Typography>
        <Typography variant="bodyLAcc">
          The rabbit-hole went straight on like a tunnel for some way, and then
          dipped suddenly down.
        </Typography>
        <Typography variant="bodyLAcc">
          So suddenly that Alice had not a moment to think about stopping
          herself before she found herself falling down a very deep well.
        </Typography>
      </div>
      <Divider />
      <div>
        <Typography variant="bodyMAcc">Body M Acc</Typography>
        <Typography variant="bodyMAcc">
          The rabbit-hole went straight on like a tunnel for some way, and then
          dipped suddenly down.
        </Typography>
        <Typography variant="bodyMAcc">
          So suddenly that Alice had not a moment to think about stopping
          herself before she found herself falling down a very deep well.
        </Typography>
      </div>
      <Divider />
      <div>
        <Typography variant="bodySAcc">Body S Acc</Typography>
        <Typography variant="bodySAcc">
          The rabbit-hole went straight on like a tunnel for some way, and then
          dipped suddenly down.
        </Typography>
        <Typography variant="bodySAcc">
          So suddenly that Alice had not a moment to think about stopping
          herself before she found herself falling down a very deep well.
        </Typography>
      </div>
      <Divider />
      <div>
        <Typography variant="bodyL">Body Acc</Typography>
        <Typography variant="bodyL">
          The rabbit-hole went straight on like a tunnel for some way, and then
          dipped suddenly down.
        </Typography>
        <Typography variant="bodyL">
          So suddenly that Alice had not a moment to think about stopping
          herself before she found herself falling down a very deep well.
        </Typography>
      </div>
      <Divider />
      <div>
        <Typography variant="bodyM">Body Acc</Typography>
        <Typography variant="bodyM">
          The rabbit-hole went straight on like a tunnel for some way, and then
          dipped suddenly down.
        </Typography>
        <Typography variant="bodyM">
          So suddenly that Alice had not a moment to think about stopping
          herself before she found herself falling down a very deep well.
        </Typography>
      </div>
      <Divider />
      <div>
        <Typography variant="bodyS">Body S</Typography>
        <Typography variant="bodyS">
          The rabbit-hole went straight on like a tunnel for some way, and then
          dipped suddenly down.
        </Typography>
        <Typography variant="bodyS">
          So suddenly that Alice had not a moment to think about stopping
          herself before she found herself falling down a very deep well.
        </Typography>
      </div>
      <Divider />
      <div>
        <Typography variant="bodyXS">Body XS</Typography>
        <Typography variant="bodyXS">
          The rabbit-hole went straight on like a tunnel for some way, and then
          dipped suddenly down.
        </Typography>
        <Typography variant="bodyXS">
          So suddenly that Alice had not a moment to think about stopping
          herself before she found herself falling down a very deep well.
        </Typography>
      </div>
      <Divider />
    </>
  ),
};

export const Caption: Story = {
  render: () => (
    <>
      <Typography variant="captionMAcc">Caption M Acc</Typography>
      <Divider />
      <Typography variant="captionM">Caption M</Typography>
      <Divider />
      <Typography variant="captionSAcc">Caption S Acc</Typography>
      <Divider />
      <Typography variant="captionS">Caption S</Typography>
      <Divider />
      <Typography variant="captionCaps">Caption Caps</Typography>
    </>
  ),
};

export const ParagraphDeprecated: Story = {
  render: () => (
    <>
      <Typography variant="paragraphLAcc">Paragraph L Acc</Typography>
      <Divider />
      <Typography variant="paragraphL">Paragraph L</Typography>
      <Divider />
      <Typography variant="paragraphMAcc">Paragraph M Acc</Typography>
      <Divider />
      <Typography variant="paragraphM">Paragraph M</Typography>
      <Divider />
      <Typography variant="paragraphSAcc">Paragraph S Acc</Typography>
      <Divider />
      <Typography variant="paragraphS">Paragraph S</Typography>
    </>
  ),
};
