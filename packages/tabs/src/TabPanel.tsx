import { a11yProps } from './a11y';
import { type CSSProperties, useMemo } from 'react';
import { css } from '@emotion/react';

export interface TabPanelProps {
  active?: boolean;
  children: React.ReactNode;
  index: number;
  style?: CSSProperties;
  unmountWhenInactive?: boolean;
}

const baseTabPanelCSS = css({
  overflow: 'hidden',
});

const TabPanel = ({ active, children, index, style, unmountWhenInactive = false, ...rest }: TabPanelProps) => {
  const a11y = useMemo(() => a11yProps(index), [index]);

  return (
    <div
      role="tabpanel"
      hidden={!active}
      css={baseTabPanelCSS}
      {...a11y}
      style={style}
      {...rest}
    >
      {!unmountWhenInactive ? children : active ? children : null}
    </div>
  );
};

export default TabPanel;
