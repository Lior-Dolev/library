import type { CSSProperties, FC } from 'react';
import Panel, { type PanelProps } from '../Panel';
import { css } from '@emotion/react';

export interface LandscapePanelProps extends PanelProps {
  containerStyle?: CSSProperties;
  height: number;
}

const landscapePanelCSS = css({ flex: 1, width: '100%' });

const LandscapePanel: FC<LandscapePanelProps> = ({
  height,
  className,
  containerStyle,
  ...rest
}: LandscapePanelProps) => (
  <div
    style={{ height: `${height}px`, ...(containerStyle ?? {}) }}
    className={className}
  >
    <Panel
      css={landscapePanelCSS}
      {...rest}
    />
  </div>
);

export default LandscapePanel;
