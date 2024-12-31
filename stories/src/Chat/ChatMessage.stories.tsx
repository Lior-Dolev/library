import type { Meta } from '@storybook/react';
import { ChatMessage } from '@horus-library/chat';

const meta = {
  title: 'Components/Chat/ChatMessage',
  component: ChatMessage,
  tags: ['autodocs'],
} as Meta<typeof ChatMessage>;

export default meta;

const messageText = `הייתי היום בבריכה והלכתי אחרי זה לים.
אח״כ התקלחתי והתיישבתי על הספה ואז הדלקתי את הטלויזיה.
לא היה מה לראות בנטפליקס.`

export const ChatLeftMessage = () => {
  return (
    <ChatMessage direction={'ltr'} >{messageText}</ChatMessage>
  )
}

const messageText2 = `די נו, לא באמת...`

export const ChatRightMessage = () => {
  return (
    <ChatMessage direction={'rtl'} >{messageText2}</ChatMessage>
  )
}
