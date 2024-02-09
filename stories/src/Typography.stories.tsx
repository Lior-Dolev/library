import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import Typography, { type TypographyProps } from '@horus-library/typography';

const meta = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
} as Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

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
