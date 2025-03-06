import type { FC } from 'react';
import Caption from '@horus-library/caption';
import { formatMilliSecondsDate } from '@horus-library/formatter';

export interface IChatMessageDateTimeProps {
  timestamp: number;
}

/**
 * relative date, without year
 */
const ChatMessageDateTime: FC<IChatMessageDateTimeProps> = ({ timestamp }) => {
  const value = formatMilliSecondsDate(timestamp, { relative: true, noYear: true });

  return <Caption>{value}</Caption>;
};

export default ChatMessageDateTime;
