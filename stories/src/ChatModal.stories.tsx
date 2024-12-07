import type { Meta } from '@storybook/react';
import { ChatModal, ChatHeader, ChatFooter, type IChatFooterFormRef } from '@horus-library/chat';
import Typography from '@horus-library/typography'
import { Button, IconButton } from '@mui/material';
import { LocationSearching, AirplanemodeActive } from '@mui/icons-material'
import { useRef, useState } from 'react';

const meta = {
  title: 'Components/Chat',
  component: ChatModal,
  tags: ['autodocs'],
} as Meta<typeof ChatModal>;

export default meta;

const title = <Typography>שם asdfasdfad האובייקט</Typography>
export const Default = () => (
  <div style={{ width: '100px' }} >
    <ChatHeader id={'123'} title={title}>
      <IconButton><LocationSearching /></IconButton>
      <IconButton><AirplanemodeActive /></IconButton>
    </ChatHeader>
  </div>
);

const text = `אישור האובייקט`

export const ChatFooterStory = () => {
  const chatFooterRef = useRef<IChatFooterFormRef>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (text: string) => {
    console.log("Message received:", text);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay
    setIsLoading(false)
    chatFooterRef.current?.clearTextbox(); // Clear the textbox
  };

  return (
    <div >
      <ChatFooter isLoading={isLoading} onSubmit={onSubmit} ref={chatFooterRef}>
        <Button variant={'contained'} >{text}</Button>
      </ChatFooter>
    </div>
  )
}

export const ChatFooterNoActions = () => (
  <div>
    <ChatFooter onSubmit={(text) => console.log(text)} />
  </div>
)

export const ChatFooterMultipleActions = () => (
  <div style={{ width: '200px' }}>
    <ChatFooter onSubmit={(text) => console.log(text)}>
      <Button variant={'contained'} >{text}</Button>
      <Button variant={'contained'} >{text}</Button>
      <Button variant={'contained'} >{text}</Button>
    </ChatFooter>
  </div>
)