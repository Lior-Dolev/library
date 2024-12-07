import type { Meta } from '@storybook/react';
import {
  ChatMessageAvatar,
  AvatarUnitType,
  ChatMessageAvatarByType,
  ChatMessageAvatarSkeleton,
} from '@horus-library/chat';

const meta = {
  title: 'Components/Chat/ChatMessageAvatar',
  component: ChatMessageAvatar,
  tags: ['autodocs'],
} as Meta<typeof ChatMessageAvatar>;

export default meta;

const author84 = {
  username: `ליאור דולב`,
  unitName: `חט׳ חי״ר 84`,
  userId: `m7542344`,
};

const author162 = {
  username: `גל בן אריה`,
  unitName: `אוגדה 162`,
  userId: `m7572345`,
};

const createUnitTooltip = ({ userId, unitName, username }: { username: string; unitName: string; userId: string }) =>
  `${unitName}, ${username}, ${userId}`;
export const ChatMessageAvatarNumbers = () => {
  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <ChatMessageAvatar tooltipContent={createUnitTooltip(author84)}>84</ChatMessageAvatar>
      <ChatMessageAvatar tooltipContent={createUnitTooltip(author162)}>162</ChatMessageAvatar>
    </div>
  );
};

const iafText = `ח״א`;

const authorIAF = {
  username: `גל בן אריה`,
  unitName: `ח״א`,
  userId: `m7572345`,
};

export const ChatMessageAvatarText = () => {
  return <ChatMessageAvatar tooltipContent={createUnitTooltip(authorIAF)}>{iafText}</ChatMessageAvatar>;
};

const botText = `הבוט של הורוס אש`;
export const ChatMessageAvatarLogo = () => {
  return (
    <ChatMessageAvatar
      tooltipContent={botText}
      src={'./horus logo.jpg'}
    />
  );
};

export const ChatMessageAvatarUnits = () => {
  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <ChatMessageAvatarByType
        type={AvatarUnitType.hativa}
        tooltipContent={createUnitTooltip(author84)}
      >
        84
      </ChatMessageAvatarByType>
      <ChatMessageAvatarByType
        type={AvatarUnitType.ugda}
        tooltipContent={createUnitTooltip(author162)}
      >
        162
      </ChatMessageAvatarByType>
      <ChatMessageAvatarByType
        type={AvatarUnitType.iaf}
        tooltipContent={createUnitTooltip(authorIAF)}
      >
        {iafText}
      </ChatMessageAvatarByType>
    </div>
  );
};

export const LoadingChatMessageAvatarExample = () => {
  return <ChatMessageAvatarSkeleton />;
};
