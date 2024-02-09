import MUITab, { type TabProps as MUITabProps } from '@mui/material/Tab';
import { a11yProps } from './a11y';
import { type FC, useMemo } from 'react';

export interface TabProps extends MUITabProps {
  label: string;
  tabIndex: number;
}

const Tab: FC<TabProps> = ({ label, tabIndex, ...rest }: TabProps) => {
  const a11y = useMemo(() => a11yProps(tabIndex), [tabIndex]);

  return <MUITab label={label} {...a11y} {...rest} />;
};

export default Tab;
