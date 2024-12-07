import { css } from '@emotion/react';
import type { FC, ReactNode } from 'react';

interface IBaseChatMainProps {
  children: ReactNode;
}

const fullHeightCss = css({
  width: '100%',
  direction: 'rtl',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: '0.5rem',
  padding: '1em',
});

const BaseChatMain: FC<IBaseChatMainProps> = ({ children }) => <div css={fullHeightCss}>{children}</div>;

export default BaseChatMain;
