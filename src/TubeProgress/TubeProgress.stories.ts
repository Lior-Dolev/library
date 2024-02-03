import type { Meta, StoryObj } from '@storybook/react';
import TubeProgress, {TubeProgressProps} from './TubeProgress';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Tube Progress',
  component: TubeProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<TubeProgressProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HighBar: Story = {
  args: {
    value: 80,
  },
};

export const CustomValuesConfig: Story = {
  args: {
    value: 80,
    valuesConfig: {
      dangerLimit: 70,
      warningLimit: 81
    }
  },
};

export const LowBar: Story = {
  args: {
value: 10
  },
};

export const MidBar: Story = {
  args: {
    value: 30
  },
};
