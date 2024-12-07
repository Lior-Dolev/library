import { css } from "@emotion/react";
import type { FC, ReactNode } from "react";

export interface IChatMainProps {
  children: ReactNode;
  isLoading?: boolean;
}

const fullHeightCss = css({
  width: '100%',
  direction: 'rtl',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: '0.5rem'
})

const ChatMain: FC<IChatMainProps> = ({
  children
}) => (
  <div css={fullHeightCss} >{children}</div>
)

ChatMain.displayName = 'ChatMain'

export default ChatMain;