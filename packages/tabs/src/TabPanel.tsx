// import Box from '@mui/material/Box';
import { a11yProps } from './a11y';
// import { Typography } from '@horus-library/typography';
import { useMemo } from 'react';

export interface TabPanelProps {
  active?: boolean;
  children: React.ReactNode;
  index: number;
}

const TabPanel = ({ active, children, index, ...rest }: TabPanelProps) => {
  const a11y = useMemo(() => a11yProps(index), [index]);

  return (
    <div role="tabpanel" hidden={!active} {...a11y} {...rest}>
      {active && children}
      {/* {active && typeof children === 'string' ? (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      ) : (
        
      )} */}
    </div>
  );
};

export default TabPanel;
