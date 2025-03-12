import type { Meta, StoryObj } from '@storybook/react';
import Button, { type ButtonProps, SecondaryButton } from '@horus-library/button';
import Tooltip from '@horus-library/tooltip';
import CloseIcon from '@mui/icons-material/CloseSharp';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'אישור',
    variant: 'contained',
  },
} as Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'אישור',
    variant: 'contained',
  },
};

export const ReadOnlyTooltip = () => (
  <Tooltip title={'לא ניתן לשלוח'}>
    <Button
      variant={'contained'}
      readOnly
    >
      שליחה
    </Button>
  </Tooltip>
);

export const Disabled = () => (
  <Button
    variant={'contained'}
    disabled
  >
    שליחה
  </Button>
);

export const Secondary = () => <SecondaryButton>מחיקה</SecondaryButton>;

export const SecondaryDisabled = () => <SecondaryButton disabled>מחיקה</SecondaryButton>;

export const SecondaryReadOnlyTooltip = () => (
  <Tooltip title={'לא ניתן למחוק'}>
    <SecondaryButton readOnly>מחיקה</SecondaryButton>
  </Tooltip>
);

export const Close = () => (
  <SecondaryButton variant={'text'}>
    <CloseIcon />
  </SecondaryButton>
);
