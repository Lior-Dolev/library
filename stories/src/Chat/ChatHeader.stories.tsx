import type { Meta, StoryObj } from '@storybook/react';
import { ChatHeader, type IChatHeaderProps } from '@horus-library/chat';
import { IconButton } from '@mui/material';
import { LocationSearching, AirplanemodeActive } from '@mui/icons-material'

const meta = {
  title: 'Components/Chat/ChatHeader',
  component: ChatHeader,
  tags: ['autodocs'],
} as Meta<IChatHeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const longTitle = `שם כלשהו לאובייקט מאוד ארוך יותר מידי ארוך`
const shortTitle = `שם קצר`

export const Small = () => (
  <div style={{ width: '200px' }} >
    <ChatHeader id={'123'} title={longTitle}>
      <IconButton><LocationSearching /></IconButton>
      <IconButton><AirplanemodeActive /></IconButton>
    </ChatHeader>
  </div>
);

export const Small2 = () => (
  <div style={{ width: '200px' }} >
    <ChatHeader id={'123'} title={shortTitle}>
      <IconButton><LocationSearching /></IconButton>
      <IconButton><AirplanemodeActive /></IconButton>
      <IconButton><LocationSearching /></IconButton>
      <IconButton><AirplanemodeActive /></IconButton>
    </ChatHeader>
  </div>
);

export const Default: Story = {
  args: {
    title: longTitle,
  },
  render: (args) => (
    <ChatHeader id={'123'} title={args.title}>
      <IconButton><LocationSearching /></IconButton>
      <IconButton><AirplanemodeActive /></IconButton>
    </ChatHeader>
  )
};
