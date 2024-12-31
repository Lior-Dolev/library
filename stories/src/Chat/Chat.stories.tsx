import type { Meta } from '@storybook/react';
import { ChatHeader, ChatFooter, type IChatFooterFormRef, Chat, ChatMain, SeenByUnits, DefaultChatMessage } from '@horus-library/chat';
import Typography from '@horus-library/typography'
import { Button, IconButton } from '@mui/material';
import { LocationSearching, AirplanemodeActive } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react';
import { type ListRowRenderer } from 'react-virtualized';

const meta = {
  title: 'Components/Chat',
  component: Chat,
  tags: ['autodocs'],
} as Meta<typeof Chat>;

export default meta;

const titleText = `שם כלשהו לאובייקט`
const title = <Typography>{titleText}</Typography>

const text = `אישור האובייקט`

const author84 = {
  username: `ליאור דולב`,
  unitName: `חט׳ חי״ר 84`,
  userId: `m7542344`
}


const author162 = {
  username: `גל בן אריה`,
  unitName: `אוגדה 162`,
  userId: `m7572345`
}

const createUnitTooltip = ({ userId, unitName, username }: { username: string; unitName: string; userId: string }) => `${unitName}, ${username}, ${userId}`

const messages: {
  id: string;
  text: string,
  isMine: boolean,
  avatarText: string,
  avatarTooltip: string,
  timestamp: number,
  hasSeenByAll: boolean;
  seenByUsers: SeenByUnits
}[] = [
    {
      id: '1',
      text: `הייתי היום בבריכה והלכתי אחרי זה לים.
אח״כ התקלחתי והתיישבתי על הספה ואז הדלקתי את הטלויזיה.
לא היה מה לראות בנטפליקס.`,
      isMine: false,
      avatarText: '162',
      avatarTooltip: createUnitTooltip(author162),
      timestamp: new Date('2024-12-06T05:27:36.391Z').getTime(),
      hasSeenByAll: true,
      seenByUsers: {
        [author162.unitName]: [
          { userId: author162.userId, username: author162.username, timestamp: new Date('2024-12-06T05:27:36.391Z').getTime() },
          { userId: 'o123741', username: 'ניצן אמיר', timestamp: new Date('2024-12-06T06:30:36.391Z').getTime() },
        ],
        [author84.unitName]: [
          { userId: author84.userId, username: author84.username, timestamp: new Date('2024-12-07T05:29:08.105Z').getTime() },
        ]
      }
    },
    {
      id: '2',
      text: `די נו, לא באמת...`,
      isMine: true,
      avatarText: '84',
      avatarTooltip: createUnitTooltip(author84),
      timestamp: new Date('2024-12-07T05:29:08.105Z').getTime(),
      hasSeenByAll: true,
      seenByUsers: {
        [author162.unitName]: [
          { userId: author162.userId, username: author162.username, timestamp: new Date('2024-12-07T05:29:35.695Z').getTime() },
        ],
        [author84.unitName]: [
          { userId: author84.userId, username: author84.username, timestamp: new Date('2024-12-07T05:29:08.105Z').getTime() },
        ]
      }
    },
    {
      id: '3',
      text: `לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף.`,
      isMine: false,
      avatarText: '162',
      avatarTooltip: createUnitTooltip(author162),
      timestamp: new Date('2024-12-07T05:29:35.695Z').getTime(),
      hasSeenByAll: true,
      seenByUsers: {
        [author162.unitName]: [
          { userId: author162.userId, username: author162.username, timestamp: new Date('2024-12-07T05:29:35.695Z').getTime() },
        ],
        [author84.unitName]: [
          { userId: author84.userId, username: author84.username, timestamp: new Date('2024-12-08T08:23:26.075Z').getTime() },
        ]
      }
    },
    {
      id: '4',
      text: `קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.`,
      isMine: false,
      avatarText: '162',
      avatarTooltip: createUnitTooltip(author162),
      timestamp: new Date('2024-12-08T07:36:54.591Z').getTime(),
      hasSeenByAll: true,
      seenByUsers: {
        [author162.unitName]: [
          { userId: author162.userId, username: author162.username, timestamp: new Date('2024-12-08T07:36:54.591Z').getTime() },
        ],
        [author84.unitName]: [
          { userId: author84.userId, username: author84.username, timestamp: new Date('2024-12-08T08:23:26.075Z').getTime() },
        ]
      }
    },
    {
      id: '5',
      text: `קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.`,
      isMine: true,
      avatarText: '84',
      avatarTooltip: createUnitTooltip(author84),
      timestamp: new Date('2024-12-08T08:23:26.075Z').getTime(),
      hasSeenByAll: false,
      seenByUsers: {
        [author84.unitName]: [
          { userId: author84.userId, username: author84.username, timestamp: new Date('2024-12-08T08:23:26.075Z').getTime() },
        ]
      }
    },
    {
      id: '6',
      text: `הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.

קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.`,
      isMine: true,
      avatarText: '84',
      avatarTooltip: createUnitTooltip(author84),
      timestamp: new Date().getTime(),
      hasSeenByAll: false,
      seenByUsers: {
        [author84.unitName]: [
          { userId: author84.userId, username: author84.username, timestamp: new Date().getTime() },
        ]
      }
    }
  ]

const rowRenderer: ListRowRenderer = ({ index, isScrolling, isVisible, key, parent, style }) => {
  const { avatarText, avatarTooltip, hasSeenByAll, isMine, id, seenByUsers, text, timestamp } = messages[index];

  return (
    <DefaultChatMessage
      style={style}
      avatarText={avatarText}
      avatarTooltip={avatarTooltip}
      hasSeenByAll={hasSeenByAll}
      index={index}
      isMine={isMine}
      isScrolling={isScrolling}
      isVisible={isVisible}
      key={key}
      messsageId={id}
      parent={parent}
      seenByUsers={seenByUsers}
      timestamp={timestamp}
    >
      {text}
    </DefaultChatMessage>
  )
}

export const ChatDefault = () => {
  const chatFooterRef = useRef<IChatFooterFormRef>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [firstUnseenIndex, setFirstUnseenIndex] = useState<number | undefined>(undefined);
  const hasSetIndexRef = useRef(false);

  useEffect(() => {
    if (!hasSetIndexRef.current && messages.length > 0) {
      const firstUnseenMessageIndex = messages.findIndex(message => !message.hasSeenByAll);
      setFirstUnseenIndex(firstUnseenMessageIndex !== -1 ? firstUnseenMessageIndex : 0);
      hasSetIndexRef.current = true;  // Mark as set
    }
  }, [messages]);

  const onSubmit = async (text: string) => {
    console.log("Message received:", text);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay
    setIsLoading(false)
    chatFooterRef.current?.clearTextbox(); // Clear the textbox
  };

  return (
    <div style={{ height: '500px' }} >
      <Chat>
        <ChatHeader id={'123'} title={title}>
          <IconButton><LocationSearching /></IconButton>
          <IconButton><AirplanemodeActive /></IconButton>
        </ChatHeader>
        <ChatMain
          firstUnseenMessage={firstUnseenIndex}
          messagesCount={messages.length}
          rowRenderer={rowRenderer}
        />
        <ChatFooter isLoading={isLoading} onSubmit={onSubmit} ref={chatFooterRef}>
          <Button variant={'contained'} >{text}</Button>
        </ChatFooter>
      </Chat>
    </div>
  )
}
