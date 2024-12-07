import { useMemo, type FC } from 'react';
import ChatMessageSeenBy, { type IChatMessageSeenByProps } from './ChatMessageSeenBy';
import Tooltip from '@horus-library/tooltip';
import UserUnitCaptionList from './UserUnitCaptionList';

export type UserSeenDetails = { username: string; userId: string; timestamp: number };
export type SeenByUnits = { [unitName: string]: UserSeenDetails[] };

export interface IChatMessageSeenByUnitsProps extends IChatMessageSeenByProps {
  seenByUsers: SeenByUnits;
}

const ChatMessageSeenByUnits: FC<IChatMessageSeenByUnitsProps> = ({ hasSeenByAll, seenByUsers }) => {
  const tooltipContent = useMemo(() => <UserUnitCaptionList seenByUsers={seenByUsers} />, [seenByUsers]);

  return (
    <Tooltip title={tooltipContent}>
      <ChatMessageSeenBy hasSeenByAll={hasSeenByAll} />
    </Tooltip>
  );
};

export default ChatMessageSeenByUnits;
