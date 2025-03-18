import type { Meta } from '@storybook/react';
import Table, { TableBody, TableCell, TableHead, TableHeadRow, TableRow, type TableProps } from '@horus-library/table';

const meta = {
  title: 'Table',
  component: Table,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<TableProps>;

export default meta;
