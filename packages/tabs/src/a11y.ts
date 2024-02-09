export const a11yProps = (
  index: number
): {
  id: string;
  'aria-controls': string;
} => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
