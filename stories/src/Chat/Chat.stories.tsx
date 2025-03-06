import type { Meta } from '@storybook/react';
import {
  ChatHeader,
  ChatFooter,
  type IChatFooterFormRef,
  Chat,
  ChatMain,
  SeenByUnits,
  DefaultChatMessage,
  AvatarUnitType,
  useScrollToMessage,
} from '@horus-library/chat';
import Typography from '@horus-library/typography';
import { Button, IconButton } from '@mui/material';
import { LocationSearching, AirplanemodeActive } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';

const meta = {
  title: 'Components/Chat',
  component: Chat,
  tags: ['autodocs'],
} as Meta<typeof Chat>;

export default meta;

const titleText = `שם כלשהו לאובייקט`;
const title = <Typography>{titleText}</Typography>;

const text = `אישור האובייקט`;

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

const messages: {
  id: string;
  text: string;
  isMine: boolean;
  avatarText: string;
  avatarTooltip: string;
  avatarType: AvatarUnitType;
  timestamp: number;
  hasSeenByAll: boolean;
  seenByUsers: SeenByUnits;
}[] = [
  {
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
  },
  {
    id: '2',
    text: `די נו, לא באמת...`,
    isMine: true,
    avatarText: '84',
    avatarTooltip: createUnitTooltip(author84),
    avatarType: AvatarUnitType.hativa,
    timestamp: new Date('2024-12-07T05:29:08.105Z').getTime(),
    hasSeenByAll: true,
    seenByUsers: {
      [author162.unitName]: [
        {
          userId: author162.userId,
          username: author162.username,
          timestamp: new Date('2024-12-07T05:29:35.695Z').getTime(),
        },
      ],
      [author84.unitName]: [
        {
          userId: author84.userId,
          username: author84.username,
          timestamp: new Date('2024-12-07T05:29:08.105Z').getTime(),
        },
      ],
    },
  },
  {
    id: '3',
    text: `לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף.`,
    isMine: false,
    avatarText: '162',
    avatarType: AvatarUnitType.ugda,
    avatarTooltip: createUnitTooltip(author162),
    timestamp: new Date('2024-12-07T05:29:35.695Z').getTime(),
    hasSeenByAll: true,
    seenByUsers: {
      [author162.unitName]: [
        {
          userId: author162.userId,
          username: author162.username,
          timestamp: new Date('2024-12-07T05:29:35.695Z').getTime(),
        },
      ],
      [author84.unitName]: [
        {
          userId: author84.userId,
          username: author84.username,
          timestamp: new Date('2024-12-08T08:23:26.075Z').getTime(),
        },
      ],
    },
  },
  {
    id: '4',
    text: `קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.`,
    isMine: false,
    avatarText: '162',
    avatarType: AvatarUnitType.ugda,
    avatarTooltip: createUnitTooltip(author162),
    timestamp: new Date('2024-12-08T07:36:54.591Z').getTime(),
    hasSeenByAll: true,
    seenByUsers: {
      [author162.unitName]: [
        {
          userId: author162.userId,
          username: author162.username,
          timestamp: new Date('2024-12-08T07:36:54.591Z').getTime(),
        },
      ],
      [author84.unitName]: [
        {
          userId: author84.userId,
          username: author84.username,
          timestamp: new Date('2024-12-08T08:23:26.075Z').getTime(),
        },
      ],
    },
  },
  {
    id: '5',
    text: `קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.`,
    isMine: true,
    avatarText: '84',
    avatarType: AvatarUnitType.hativa,
    avatarTooltip: createUnitTooltip(author84),
    timestamp: new Date('2024-12-08T08:23:26.075Z').getTime(),
    hasSeenByAll: false,
    seenByUsers: {
      [author84.unitName]: [
        {
          userId: author84.userId,
          username: author84.username,
          timestamp: new Date('2024-12-08T08:23:26.075Z').getTime(),
        },
      ],
    },
  },
  {
    id: '6',
    text: `הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.

קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.`,
    isMine: true,
    avatarText: '84',
    avatarTooltip: createUnitTooltip(author84),
    avatarType: AvatarUnitType.ugda,
    timestamp: new Date().getTime(),
    hasSeenByAll: false,
    seenByUsers: {
      [author84.unitName]: [{ userId: author84.userId, username: author84.username, timestamp: new Date().getTime() }],
    },
  },
];

export const ChatDefault = () => {
  const chatFooterRef = useRef<IChatFooterFormRef>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const firstUnseenMessageId = messages.find((message) => !message.hasSeenByAll)?.id;
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const { unseenMessageRef } = useScrollToMessage(messages, isInitialLoading);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const onSubmit = async (text: string) => {
    console.log('Message received:', text);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay
    setIsLoading(false);
    chatFooterRef.current?.clearTextbox(); // Clear the textbox
  };

  return (
    <div style={{ height: '500px' }}>
      <Chat>
        <ChatHeader
          id={'chat-header'}
          title={title}
          onClose={() => {}}
          onMinimize={() => {}}
          isLoading={isInitialLoading}
        >
          <IconButton>
            <LocationSearching />
          </IconButton>
          <IconButton>
            <AirplanemodeActive />
          </IconButton>
        </ChatHeader>
        <ChatMain isLoading={isInitialLoading}>
          {messages.map(
            ({
              id,
              avatarText,
              avatarTooltip,
              avatarType,
              hasSeenByAll,
              isMine,
              seenByUsers,
              timestamp,
              text: messageText,
            }) => (
              <DefaultChatMessage
                avatarText={avatarText}
                avatarTooltip={avatarTooltip}
                avatarType={avatarType}
                hasSeenByAll={hasSeenByAll}
                isMine={isMine}
                key={id}
                messsageId={id}
                ref={id === firstUnseenMessageId ? unseenMessageRef : null}
                seenByUsers={seenByUsers}
                timestamp={timestamp}
              >
                {messageText}
              </DefaultChatMessage>
            ),
          )}
        </ChatMain>
        <ChatFooter
          isLoading={isLoading}
          onSubmit={onSubmit}
          ref={chatFooterRef}
        >
          <Button variant={'contained'}>{text}</Button>
        </ChatFooter>
      </Chat>
    </div>
  );
};
