import type { Meta } from '@storybook/react';
import { ChatModal, ChatHeader, ChatFooter, type IChatFooterFormRef, Chat, ChatMain, ChatMessage, ChatMessageAvatar } from '@horus-library/chat';
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

const text = `אישור האובייקט`


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

export const ChatFooterDefault = () => {
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

const messages: { text: string, isMine: boolean }[] = [
  {
    text: `הייתי היום בבריכה והלכתי אחרי זה לים.
אח״כ התקלחתי והתיישבתי על הספה ואז הדלקתי את הטלויזיה.
לא היה מה לראות בנטפליקס.`,
    isMine: false
  },
  {
    text: `די נו, לא באמת...`,
    isMine: true
  },
  {
    text: `לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף.`,
    isMine: false
  },
  {
    text: `קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.`,
    isMine: false,
  },
  {
    text: `קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.`,
    isMine: true,
  },
  {
    text: `הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.

קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.`,
    isMine: true,
  }
]

export const ChatDefault = () => {
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
    <div style={{ height: '500px' }} >
      <Chat>
        <ChatHeader id={'123'} title={title}>
          <IconButton><LocationSearching /></IconButton>
          <IconButton><AirplanemodeActive /></IconButton>
        </ChatHeader>
        <ChatMain>
          {messages.map(({ text, isMine }) => <ChatMessage direction={isMine ? 'rtl' : 'ltr'} >{text}</ChatMessage>)}
        </ChatMain>
        <ChatFooter isLoading={isLoading} onSubmit={onSubmit} ref={chatFooterRef}>
          <Button variant={'contained'} >{text}</Button>
        </ChatFooter>
      </Chat>
    </div>
  )
}

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

export const ChatMessageAvatarNumbers = () => {
  return (<div style={{ display: 'flex', gap: '1em' }} >
    <ChatMessageAvatar tooltipContent={createUnitTooltip(author84)} >84</ChatMessageAvatar>
    <ChatMessageAvatar tooltipContent={createUnitTooltip(author162)} >162</ChatMessageAvatar>
  </div>)
}

const iafText = `ח״א`

const authorIAF = {
  username: `גל בן אריה`,
  unitName: `ח״א`,
  userId: `m7572345`
}

export const ChatMessageAvatarText = () => {
  return <ChatMessageAvatar tooltipContent={createUnitTooltip(authorIAF)}>{iafText}</ChatMessageAvatar>
}

const botText = `הבוט של הורוס אש`
export const ChatMessageAvatarLogo = () => {
  return <ChatMessageAvatar tooltipContent={botText} src={'./horus logo.jpg'} />
}