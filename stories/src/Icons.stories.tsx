import type { Meta } from '@storybook/react';
import { LoaderIcon } from '@horus-library/icons';

const meta = {
  title: 'Icons',
  component: LoaderIcon,
  tags: ['autodocs'],
} as Meta<typeof LoaderIcon>;

export default meta;

export const Default = () => <LoaderIcon />;
