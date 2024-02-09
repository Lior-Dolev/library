import { Tabs as MUITabs, type TabsProps as MUITabsProps } from '@mui/material';
import type { FC } from 'react';

export interface TabsProps extends MUITabsProps {}

const Tabs: FC<TabsProps> = ({ variant = 'fullWidth', ...rest }: TabsProps) => (
  <MUITabs aria-label="tabs" variant={variant} {...rest} />
);

export default Tabs;
