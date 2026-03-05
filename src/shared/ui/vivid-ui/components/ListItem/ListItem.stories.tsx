import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import { Divider } from '../Divider';
import { Clear24 } from '../Icons/Ic24/Clear24';
import { IconView } from '../IconView';
import { ListItem } from './ListItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const meta: Meta<typeof ListItem> = {
  argTypes: {
    component: {
      control: false,
    },
    labelPosition: {
      control: 'radio',
      options: ['up', 'down'],
    },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
  component: ListItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ListItem>;

const CustomWrapper = styled.button`
  width: 100%;
  border: none;
  background: #f5f5f4;
  border-radius: ${(props) => props.theme.token.borderRadiusM};
  padding: ${(props) => props.theme.token.spacingXS};
`;

export const Default: Story = {
  args: {
    component: 'li',
    label: 'Label',
    labelPosition: 'up',
    leftIcon: <IconView background="pink">LI</IconView>,
    rightIcon: <Clear24 color="lightgray" size={24} />,
    size: 'small',
    title: 'Title',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'wow so cool',
    leftIcon: <IconView background="green" />,
    title: 'ListItem with leftIcon',
  },
};

export const WithLeftBothIcons: Story = {
  args: {
    label: 'wow so cool',
    leftIcon: <IconView background="green" />,
    rightIcon: <Clear24 color="lightgray" size={24} />,
    title: 'ListItem with leftIcon',
  },
};

export const PlainList: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => {
    return (
      <List>
        {['Monaco', 'South Africa', 'Kiribati'].map((country) => (
          <li key={country}>
            <ListItem component="span" {...args} title={country} />
            <Divider />
          </li>
        ))}
      </List>
    );
  },
};

export const ListWithIcon: Story = {
  args: {
    leftIcon: <IconView background="green">ISO</IconView>,
    size: 'medium',
  },
  render: (args) => {
    return (
      <List>
        {['Monaco', 'South Africa', 'Kiribati'].map((country) => (
          <li key={country}>
            <ListItem component="span" {...args} title={country} />
            <Divider />
          </li>
        ))}
      </List>
    );
  },
};

export const ListWithCustomComponent: Story = {
  args: {
    component: CustomWrapper,
    leftIcon: <IconView background="green">ICO</IconView>,
    rightIcon: <Clear24 color="lightgray" size={24} />,
    size: 'medium',
  },
  render: (args) => {
    return (
      <List
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8rem',
          width: '100%',
        }}
      >
        {['Raiffeisen', 'Citibank', 'N26 bank'].map((country) => (
          <ListItem key={country} {...args} title={country} />
        ))}
      </List>
    );
  },
};
