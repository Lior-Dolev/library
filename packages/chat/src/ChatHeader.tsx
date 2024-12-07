import type { FC, ReactNode } from 'react';

export interface IChatHeaderProps {
  /**
   * (actions)
    - header height will be min-height by title and children
    - flex with - don't shrink it (shouldn't be much)
   */
  children: ReactNode;
  id: string;
  /** 
   * can be text or whatever component
   *     - width shrinks according to the space that's left from children width
   */
  title: ReactNode;
  /** to display skeleton (not displaying children while loading) */
  isLoading?: boolean;
}

const ChatHeader: FC<IChatHeaderProps> = ({
  children,
  id,
  title,
}) => <div id={id} css={{ display: 'flex' }} >
    {!!children ? <div css={[{ display: 'flex', flex: 1, height: 'min-content' }]} >
      {children}
    </div> : null}
    <div css={[{ display: 'flex', flexWrap: 'wrap' }]} >
      {title}
    </div>
  </div>;

ChatHeader.displayName = 'ChatHeader'

export default ChatHeader;
