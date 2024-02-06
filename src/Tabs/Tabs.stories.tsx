import Box from '@mui/material/Box';
import { Meta } from '@storybook/react';
import { useState } from 'react';
import { FilesAccordion, FormAccordion } from '../Accordion/Accordion.stories';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  SourceDateStepSubLabel,
  Stepper,
  TabPanel,
  Tabs,
  Tab,
} from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Tabs',
  component: Tabs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

const steps = [
  {
    id: 'first',
    label: 'נוצרה בקשה חדשה להעברת כספים',
    content: `הבקשה נוצרה על ידי הרצי הלוי `,
    subLabel: <SourceDateStepSubLabel source={'ATM'} time={1700642439921} />,
  },
  {
    id: 'second',
    label: 'הבקשה הגיעה אל בנק ישראל ',
    content: 'סתם עוד פירוט על הבקשה אם יש',
    subLabel: (
      <SourceDateStepSubLabel source={'בנק ישראל'} time={1700642479921} />
    ),
  },
  {
    id: 'third',
    label: 'הבקשה אושרה',
    content: `יש אישור לבצע את העברת הכספים. האישור ניתן ע״י זיבי זובי ותועד במערכת סוכריה על מקל`,
    subLabel: (
      <SourceDateStepSubLabel source={'בנק ישראל'} time={1706642479921} />
    ),
  },
];

export const Default = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const onChange = (event: React.SyntheticEvent, newValue: number): void => {
    setActiveTabIndex(newValue);
  };

  return (
    <Box>
      <Tabs value={activeTabIndex} onChange={onChange}>
        <Tab label="ראשי" tabIndex={0} />
        <Tab label="מקור" tabIndex={1} />
      </Tabs>
      <TabPanel active={activeTabIndex === 0} index={0}>
        <Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            מסלול הפיצה
          </AccordionSummary>
          <AccordionDetails>
            <Stepper steps={steps} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel2-content" id="panel2-header">
            פירוט מרכיבים
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <FilesAccordion />
      </TabPanel>
      <TabPanel active={activeTabIndex === 1} index={1}>
        <FormAccordion />
        <FormAccordion />
        <FormAccordion />
      </TabPanel>
    </Box>
  );
};
