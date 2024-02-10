import type { Meta, StoryObj } from '@storybook/react';
import TubeProgress, { TubeProgressProps } from '@horus-library/tube-progress';

const meta = {
  title: 'Components/Tube Progress',
  component: TubeProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<TubeProgressProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomValuesConfig: Story = {
  args: {
    value: 10,
    rangesConfig: {
      dangerLimit: 70,
      warningLimit: 81,
    },
  },
};

export const HighBar: Story = {
  args: {
    value: 80,
  },
};

export const LowBar: Story = {
  args: {
    value: 10,
  },
};

export const MidBar: Story = {
  args: {
    value: 30,
  },
};
