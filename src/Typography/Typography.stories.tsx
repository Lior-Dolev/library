import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { Typography, TypographyProps } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Typography',
  component: Typography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'איפסום לורם',
    variant: 'body1',
  },
};

type Variant = TypographyProps['variant'];

export const TypographySystem = () => {
  const variants: Variant[] = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
  ];
  return (
    <Box>
      {variants.map((level) => (
        <Typography key={level} variant={level as Variant}>
          {` איפסום לורם - ${level}`}
        </Typography>
      ))}
    </Box>
  );
};
