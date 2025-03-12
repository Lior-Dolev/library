import { css } from '@emotion/react';
import { clsx } from 'clsx';
import type { CSSProperties, FC, ReactNode } from 'react';
import PanelContentBackdrop from './PanelContentBackdrop';

export interface PanelContentProps {
  children: ReactNode;
  className?: string;
  loading?: boolean;
  scroll?: boolean;
  style?: CSSProperties;
}

const basePanelContentCSS = css({
  position: 'relative',
  flex: 1,
  overflow: 'hidden',
});
const scrollPanelContentCSS = css(
  {
    '&&.scroll': {
      overflow: 'auto',
    },
  },
  {
    '&&.loading': {
      overflow: 'hidden',
    },
  },
);
const zayadPanelContentCSS = css({
  direction: 'ltr',
  paddingLeft: '19px',
  paddingTop: '5px',
});

const panelContentCSS = [basePanelContentCSS, scrollPanelContentCSS, zayadPanelContentCSS];

const PanelContent: FC<PanelContentProps> = ({ children, className, loading, scroll, style }: PanelContentProps) => (
  <div
    css={panelContentCSS}
    className={clsx(className, { loading, scroll })}
    style={style}
  >
    {loading && <PanelContentBackdrop />}
    {children}
  </div>
);

export default PanelContent;
