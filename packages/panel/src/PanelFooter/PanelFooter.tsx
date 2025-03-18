import { css } from '@emotion/react';
import type { CSSProperties, FC, ReactNode } from 'react';

export interface PanelFooterProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  style?: CSSProperties;
}

const PanelFooterCSS = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5em',
});

const PanelFooter: FC<PanelFooterProps> = ({ children, className, style }: PanelFooterProps) => (
  <div
    css={PanelFooterCSS}
    className={className}
    style={style}
  >
    {children}
  </div>
);

export default PanelFooter;
