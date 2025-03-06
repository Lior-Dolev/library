import type { FC, ReactNode } from 'react';
import { ChatComponentName } from './componentNames';
import Typography from '@horus-library/typography';
import { PanelHeader } from '@horus-library/panel';

export interface IChatHeaderProps {
  /**
   * (actions)
    - header height will be min-height by title and children
    - flex width - don't shrink it (shouldn't be much)
   */
  children: ReactNode;
  id: string;
  /**
   * can be text or whatever component
   *     - width shrinks according to the space that's left from children width
   */
  title: ReactNode;
  /** to display skeleton */
  isLoading?: boolean;

  onClose: () => void;
  onMinimize?: () => void;
}

const ChatHeader: FC<IChatHeaderProps> = ({ children, id, isLoading, onClose, onMinimize, title }) => {
  return (
    <PanelHeader
      id={id}
      isLoading={isLoading}
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div
        css={[
          {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
          },
        ]}
      >
        {typeof title === 'string' ? <Typography key={'title'}>{title}</Typography> : title}
      </div>
      {!!children ? (
        <div
          css={[
            {
              display: 'flex',
              flex: 1,
              height: 'min-content',
              justifyContent: 'end',
            },
          ]}
        >
          {children}
        </div>
      ) : null}
    </PanelHeader>
  );
};

ChatHeader.displayName = ChatComponentName.header;

export default ChatHeader;
