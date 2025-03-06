import type { Meta } from '@storybook/react';
import { ChatFooter, type IChatFooterFormRef } from '@horus-library/chat';
import { Button } from '@mui/material';
import { useRef, useState } from 'react';

const meta = {
  title: 'Components/Chat/ChatFooter',
  component: ChatFooter,
  tags: ['autodocs'],
} as Meta<typeof ChatFooter>;

export default meta;
const text = `אישור האובייקט`;

export const ChatFooterNoActions = () => (
  <div>
    <ChatFooter onSubmit={(text) => console.log(text)} />
  </div>
);

export const ChatFooterMultipleActions = () => (
  <div style={{ width: '200px' }}>
    <ChatFooter onSubmit={(text) => console.log(text)}>
      <Button variant={'contained'}>{text}</Button>
      <Button variant={'contained'}>{text}</Button>
      <Button variant={'contained'}>{text}</Button>
    </ChatFooter>
  </div>
);

export const ChatFooterDefault = () => {
  const chatFooterRef = useRef<IChatFooterFormRef>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (text: string) => {
    console.log('Message received:', text);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay
    setIsLoading(false);
    chatFooterRef.current?.clearTextbox(); // Clear the textbox
  };

  return (
    <div>
      <ChatFooter
        isLoading={isLoading}
        onSubmit={onSubmit}
        ref={chatFooterRef}
      >
        <Button variant={'contained'}>{text}</Button>
      </ChatFooter>
    </div>
  );
};
