import type { Meta } from '@storybook/react';
import {
  AvatarUnitType,
  ChatMessage,
  ChatMessageAvatarByType,
  ChatMessageContent,
  DefaultChatMessage,
  IChatMessageAvatarByTypeProps,
  IChatMessageAvatarProps,
  IUserUnitCaptionListProps,
  ChatMessageMatadata,
  ChatMessageDateTime,
  UserUnitCaptionList,
  SeenByUnits,
  ChatMessageSkeleton,
} from '@horus-library/chat';
import {
  CSSProperties,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  Key,
  ReactNode,
  RefAttributes,
  useMemo,
} from 'react';
import { Divider, Typography, useTheme } from '@mui/material';
import { AccessTime as ClockIcon, ErrorOutline as ErrorICon } from '@mui/icons-material';
import Tooltip from '@horus-library/tooltip';

const meta = {
  title: 'Components/Chat/ChatMessage',
  component: ChatMessage,
  tags: ['autodocs'],
} as Meta<typeof ChatMessage>;

export default meta;

const messageText = `הייתי היום בבריכה והלכתי אחרי זה לים.
אח״כ התקלחתי והתיישבתי על הספה ואז הדלקתי את הטלויזיה.
לא היה מה לראות בנטפליקס.`;

export const ChatLeftMessage = () => {
  return <ChatMessage direction={'ltr'}>{messageText}</ChatMessage>;
};

const messageText2 = `די נו, לא באמת...`;

export const ChatRightMessage = () => {
  return <ChatMessage direction={'rtl'}>{messageText2}</ChatMessage>;
};

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

const defaultMessage = {
  id: '1',
  text: `הייתי היום בבריכה והלכתי אחרי זה לים.
אח״כ התקלחתי והתיישבתי על הספה ואז הדלקתי את הטלויזיה.
לא היה מה לראות בנטפליקס.`,
  isMine: false,
  avatarText: '162',
  avatarTooltip: createUnitTooltip(author162),
  avatarType: AvatarUnitType.ugda,
  timestamp: new Date('2024-12-06T05:27:36.391Z').getTime(),
  hasSeenByAll: true,
  seenByUsers: {
    [author162.unitName]: [
      {
        userId: author162.userId,
        username: author162.username,
        timestamp: new Date('2024-12-06T05:27:36.391Z').getTime(),
      },
      { userId: 'o123741', username: 'ניצן אמיר', timestamp: new Date('2024-12-06T06:30:36.391Z').getTime() },
    ],
    [author84.unitName]: [
      {
        userId: author84.userId,
        username: author84.username,
        timestamp: new Date('2024-12-07T05:29:08.105Z').getTime(),
      },
    ],
  },
};

export const DefaultChatMessageBot = () => {
  return (
    <DefaultChatMessage
      avatarText={defaultMessage.avatarText}
      avatarTooltip={defaultMessage.avatarTooltip}
      avatarType={defaultMessage.avatarType}
      hasSeenByAll={defaultMessage.hasSeenByAll}
      isMine={defaultMessage.isMine}
      key={defaultMessage.id}
      messsageId={defaultMessage.id}
      seenByUsers={defaultMessage.seenByUsers}
      timestamp={defaultMessage.timestamp}
    >
      {defaultMessage.text}
    </DefaultChatMessage>
  );
};

enum TransactionStatus {
  failed = 'failed',
  pending = 'pending',
}

interface ITransactionChatMessageProps extends IUserUnitCaptionListProps {
  avatarText: string;
  avatarTooltip: IChatMessageAvatarProps['tooltipContent'];
  avatarType?: IChatMessageAvatarByTypeProps['type'];
  children: ReactNode;
  isMine: boolean;
  messsageId: Key;
  status: TransactionStatus;
  style?: CSSProperties;
  timestamp: number;
}

const PendingIcon = forwardRef<SVGSVGElement>((props, ref) => {
  const {
    palette: {
      warning: { dark: color },
    },
  } = useTheme();

  return (
    <ClockIcon
      style={{ fill: color }}
      ref={ref}
      {...props}
    />
  );
});

const FailedIcon = forwardRef<SVGSVGElement>((props, ref) => {
  const {
    palette: {
      error: { dark: color },
    },
  } = useTheme();

  return (
    <ErrorICon
      style={{ fill: color }}
      ref={ref}
      {...props}
    />
  );
});

interface IPendingChatMessageSeenByUnitsProps {
  status: TransactionStatus;
  seenByUsers: SeenByUnits;
}

const transactionFactory: {
  [key in TransactionStatus]: {
    Icon: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
    title: string;
  };
} = {
  [TransactionStatus.failed]: { Icon: FailedIcon, title: `השינויים נדחו ע״י ביזור משואה` },
  [TransactionStatus.pending]: { Icon: PendingIcon, title: `השינויים ממתינים לאישור משואה` },
};

const UserUnitTooltipContent: FC<IPendingChatMessageSeenByUnitsProps> = ({ seenByUsers, status }) => {
  const { Icon: TransactionIcon, title } = transactionFactory[status];

  return (
    <div>
      <UserUnitCaptionList seenByUsers={seenByUsers} />
      <Divider style={{ backgroundColor: 'white' }} />
      <div style={{ alignItems: 'center', display: 'flex', gap: '0.5em', padding: '0.5em' }}>
        <TransactionIcon />
        <Typography>{title}</Typography>
      </div>
    </div>
  );
};

const TransactionChatMessageSeenByUnits: FC<IPendingChatMessageSeenByUnitsProps> = ({ seenByUsers, status }) => {
  const { Icon: TransactionIcon } = useMemo(() => transactionFactory[status], [status]);

  return (
    <Tooltip
      title={
        <UserUnitTooltipContent
          seenByUsers={seenByUsers}
          status={status}
        />
      }
    >
      <TransactionIcon />
    </Tooltip>
  );
};

const TransactionChatMessage: ForwardRefExoticComponent<ITransactionChatMessageProps & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, ITransactionChatMessageProps>(
    (
      { avatarText, avatarTooltip, avatarType, children, isMine, messsageId, seenByUsers, status, style, timestamp },
      ref,
    ) => (
      <ChatMessage
        direction={isMine ? 'rtl' : 'ltr'}
        key={messsageId}
        ref={ref}
        style={style}
      >
        <ChatMessageAvatarByType
          tooltipContent={avatarTooltip}
          type={avatarType}
        >
          {avatarText}
        </ChatMessageAvatarByType>
        <ChatMessageContent>{children}</ChatMessageContent>
        <ChatMessageMatadata>
          <TransactionChatMessageSeenByUnits
            seenByUsers={seenByUsers}
            status={status}
          />
          <ChatMessageDateTime timestamp={timestamp} />
        </ChatMessageMatadata>
      </ChatMessage>
    ),
  );

export const PendingChatMessageBot = () => {
  return (
    <TransactionChatMessage
      avatarText={defaultMessage.avatarText}
      avatarTooltip={defaultMessage.avatarTooltip}
      avatarType={defaultMessage.avatarType}
      isMine={defaultMessage.isMine}
      key={defaultMessage.id}
      messsageId={defaultMessage.id}
      seenByUsers={defaultMessage.seenByUsers}
      status={TransactionStatus.pending}
      timestamp={defaultMessage.timestamp}
    >
      {defaultMessage.text}
    </TransactionChatMessage>
  );
};

export const SuccessChatMessageBot = () => {
  return (
    <DefaultChatMessage
      avatarText={defaultMessage.avatarText}
      avatarTooltip={defaultMessage.avatarTooltip}
      avatarType={defaultMessage.avatarType}
      hasSeenByAll={defaultMessage.hasSeenByAll}
      isMine={defaultMessage.isMine}
      key={defaultMessage.id}
      messsageId={defaultMessage.id}
      seenByUsers={defaultMessage.seenByUsers}
      timestamp={defaultMessage.timestamp}
    >
      {defaultMessage.text}
    </DefaultChatMessage>
  );
};

export const FailedChatMessageBot = () => {
  return (
    <TransactionChatMessage
      avatarText={defaultMessage.avatarText}
      avatarTooltip={defaultMessage.avatarTooltip}
      avatarType={defaultMessage.avatarType}
      isMine={defaultMessage.isMine}
      key={defaultMessage.id}
      messsageId={defaultMessage.id}
      seenByUsers={defaultMessage.seenByUsers}
      status={TransactionStatus.failed}
      timestamp={defaultMessage.timestamp}
    >
      {defaultMessage.text}
    </TransactionChatMessage>
  );
};

export const Transactions = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
    <PendingChatMessageBot />
    <SuccessChatMessageBot />
    <FailedChatMessageBot />
  </div>
);

export const LoadingChatMessage = () => (
  <div>
    <ChatMessageSkeleton
      isMine={false}
      messsageId={'id'}
    />
    <ChatMessageSkeleton
      isMine={true}
      messsageId={'id'}
    />
  </div>
);
