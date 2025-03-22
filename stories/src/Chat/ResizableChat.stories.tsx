import type { Meta } from '@storybook/react';
import { Chat } from '@horus-library/chat';
import ResizableDiv from './ResizableDiv';

const meta = {
  title: 'Components/Chat/ResizableChat',
  component: Chat,
  tags: ['autodocs'],
} as Meta<typeof Chat>;

export default meta;

export const Default = () => {
  return (
    <>
      <ResizableDiv />
    </>
  );
};
