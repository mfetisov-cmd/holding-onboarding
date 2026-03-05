import type { Meta, StoryObj } from '@storybook/react';

import { Watch24 } from '@/shared/ui/vivid-ui/components/Icons';

import { Table, TableBody, TableCell, TableHead, TableRow } from './Table';

const meta: Meta<typeof Table> = {
  argTypes: {},
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `Table contains set of components allowing to create basic tables such as:
            \`TableHead\`, \`TableBody\`, \`TableFoot\`, \`TableRow\` and \`TableCell\`.
            Here is an example of usage those components all together
          `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

const header = ['account name', 'balance', 'cards', 'iban'];

const data = [
  ['Main', '10 700.90 €', '•7898', 'DE25 1234 5678 9101 1121'],
  ['Employee benefits', '1 000.00 €', '11 cards', 'DE25 1234 5678 9101 1122'],
  ['Tax', '500.12 €', '+ card', 'DE25 1234 5678 9101 1123'],
  ['Credit', '6789.00 €', '•7898', 'DE25 1234 5678 9101 1124'],
  ['Savings', '120.75 €', '•7898', 'DE25 1234 5678 9101 1125'],
];

export const Default: Story = {
  args: {
    hasHorizontalPaddings: true,
    textAlign: 'left',
  },
  render: (args) => {
    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            {header.map((cell) => (
              <TableCell colSpan={cell === 'iban' ? 2 : undefined} key={cell}>
                {cell}
              </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row[0]}>
              {row.map((cell) => (
                <TableCell key={`${row[0]}_${cell}`}>{cell}</TableCell>
              ))}
              <TableCell>
                <Watch24 size={32} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
