import type { FC, ReactNode } from 'react';
import { ChatComponentName } from './componentNames';
import { Box, useTheme } from '@mui/material';
import { css } from '@emotion/react'
import Typography from '@horus-library/typography';

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
  /** to display skeleton (not displaying children while loading) */
  isLoading?: boolean;
}

const flexCss = css({
  display: 'flex',
  width: '100%',
});

const paddedContentCss = css({
  gap: '0.5em',
  padding: '0.5em',
});

const baseCss = css({
  direction: 'rtl',
  flexGrow: 0,
});

const ChatHeader: FC<IChatHeaderProps> = ({
  children,
  id,
  title,
}) => {

  const theme = useTheme();

  return <Box
    css={[
      baseCss,
      flexCss,
      paddedContentCss,
      css({
        boxShadow: theme.shadows[5],
        backgroundColor: theme.palette.secondary.main,
      }),
    ]}
    id={id}
  >
    <div css={[{
      display: 'flex', flexWrap: 'wrap',
      alignItems: 'center'
    }]} >
      {typeof title === 'string' ? <Typography key={'title'}>{title}</Typography> : title}
    </div>
    {!!children ? <div css={[{
      display: 'flex',
      flex: 1,
      height: 'min-content',
      justifyContent: 'end',
    }]} >
      {children}
    </div> : null}
  </Box>
};

ChatHeader.displayName = ChatComponentName.header

export default ChatHeader;
