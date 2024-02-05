import MUITabs, { TabsProps as MUITabsProps } from '@mui/material/Tabs';
import type { FC } from 'react';

export interface TabsProps extends MUITabsProps {}

const Tabs: FC<TabsProps> = ({ variant = 'fullWidth', ...rest }: TabsProps) => (
  <MUITabs aria-label="tabs" variant={variant} {...rest} />
);

export default Tabs;
