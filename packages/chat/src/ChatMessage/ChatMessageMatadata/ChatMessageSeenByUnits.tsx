import { useMemo, type FC } from "react";
import ChatMessageSeenBy, { type IChatMessageSeenByProps } from './ChatMessageSeenBy'
import Tooltip from '@horus-library/tooltip'
import Caption from '@horus-library/caption'
import { formatMilliSecondsDate } from '@horus-library/formatter'

export type UserSeenDetails = { username: string; userId: string; timestamp: number };
export type SeenByUnits = { [unitName: string]: UserSeenDetails[] }

export interface IChatMessageSeenByUnitsProps extends IChatMessageSeenByProps {
  seenByUsers: SeenByUnits
}

const UserCaption = ({ userId, username, timestamp }: UserSeenDetails) => <><Caption style={{ unicodeBidi: "isolate" }}>{username}, </Caption><Caption style={{ unicodeBidi: "isolate" }}>{userId} </Caption><Caption style={{ unicodeBidi: "isolate" }}>{`(${formatMilliSecondsDate(timestamp, { noYear: true, relative: false })})`}</Caption></>

const UnitsText: FC<{ seenByUsers: SeenByUnits }> = ({ seenByUsers }) => {
  return <ul style={{ paddingInlineStart: 'inherit' }}>{
    Object.entries(seenByUsers).map(([unitName, users]) => (
      <li key={unitName}>
        {users.length === 0 ? <></> :
          users.length === 1 ? (
            <Caption>{unitName}: <UserCaption {...users[0]} /></Caption>
          ) :
            <>
              <Caption>{unitName}</Caption>
              <ul style={{ paddingInlineStart: '1em' }}>
                {users.map(user => <li key={user.userId}>
                  <UserCaption {...user} />
                </li>)}
              </ul>
            </>}
      </li>
    ))}
  </ul>
}

const ChatMessageSeenByUnits: FC<IChatMessageSeenByUnitsProps> = ({ hasSeenByAll, seenByUsers }) => {
  const tooltipContent = useMemo(() => <UnitsText seenByUsers={seenByUsers} />, [seenByUsers]);

  return <Tooltip title={tooltipContent} >
    <ChatMessageSeenBy hasSeenByAll={hasSeenByAll} />
  </Tooltip>
}

export default ChatMessageSeenByUnits;