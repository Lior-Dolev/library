import type { Meta } from '@storybook/react';
import { ChatHeader } from '@horus-library/chat';
import Typography from '@horus-library/typography'
import { IconButton } from '@mui/material';
import { LocationSearching, AirplanemodeActive } from '@mui/icons-material'

const meta = {
  title: 'Components/Chat/ChatHeader',
  component: ChatHeader,
  tags: ['autodocs'],
} as Meta<typeof ChatHeader>;

export default meta;

const titleText = `שם כלשהו לאובייקט`
const title = <Typography>{titleText}</Typography>

export const Default = () => (
  <div style={{ width: '100px' }} >
    <ChatHeader id={'123'} title={title}>
      <IconButton><LocationSearching /></IconButton>
      <IconButton><AirplanemodeActive /></IconButton>
    </ChatHeader>
  </div>
);
