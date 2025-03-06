import type { Meta, StoryObj } from '@storybook/react';
import { ChatHeader, type IChatHeaderProps } from '@horus-library/chat';
import { IconButton } from '@mui/material';
import { LocationSearching, AirplanemodeActive } from '@mui/icons-material';
import Tooltip from '@horus-library/tooltip';

const meta = {
  title: 'Components/Chat/ChatHeader',
  component: ChatHeader,
  tags: ['autodocs'],
} as Meta<IChatHeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const longTitle = `שם כלשהו לאובייקט מאוד ארוך יותר מידי ארוך`;
const shortTitle = `שם קצר`;
const locationTooltip = `קפיצה למיקום`;
const airplaneTooltip = `טופס טיסה`;

const LocationButton = () => (
  <Tooltip title={locationTooltip}>
    <IconButton>
      <LocationSearching />
    </IconButton>
  </Tooltip>
);
const AirplaneButton = () => (
  <Tooltip title={airplaneTooltip}>
    <IconButton>
      <AirplanemodeActive />
    </IconButton>
  </Tooltip>
);

export const Small = () => (
  <div style={{ width: '250px' }}>
    <ChatHeader
      id={'123'}
      title={longTitle}
      onClose={() => {}}
      onMinimize={() => {}}
    >
      <LocationButton />
      <AirplaneButton />
    </ChatHeader>
  </div>
);

export const Small2 = () => (
  <div style={{ width: '300px' }}>
    <ChatHeader
      id={'123'}
      title={shortTitle}
      onClose={() => {}}
      onMinimize={() => {}}
    >
      <LocationButton />
      <AirplaneButton />
      <LocationButton />
      <AirplaneButton />
    </ChatHeader>
  </div>
);

export const Default: Story = {
  args: {
    title: longTitle,
  },
  render: (args) => (
    <ChatHeader
      id={'123'}
      title={args.title}
      onClose={() => {}}
      onMinimize={() => {}}
    >
      <LocationButton />
      <AirplaneButton />
    </ChatHeader>
  ),
};
