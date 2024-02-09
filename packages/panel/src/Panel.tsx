import React, { FC, ReactNode, useState } from 'react';
import { Box, Grid, Paper, TextField, styled } from '@mui/material';
import { PanelHeader } from './PanelHeader';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@horus-library/accordion';
import { FileViewer } from '@horus-library/file-viewer';
import { SourceDateStepSubLabel, Stepper } from '@horus-library/stepper';
import { Tabs, Tab, TabPanel } from '@horus-library/tabs';
import { Typography } from '@horus-library/typography';

const RootContainer = styled(Paper)({
  width: `300px`,
  height: '700px',
  direction: 'rtl',
});

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

const FilesAccordion = () => {
  const steps = [
    {
      id: 'landscape',
      label: 'landscape.pdf',
      error: 'קובץ לא תקין בעליל',
      subLabel: <SourceDateStepSubLabel source={'סתם'} time={1700642439921} />,
    },
    {
      id: 'hebrew',
      label: 'האוניברסיטה העברית.pdf',
      content: <FileViewer src={'עברית.pdf'} height={300} />,
      subLabel: (
        <SourceDateStepSubLabel source={'משרד החינוך'} time={1700642479921} />
      ),
    },
  ];

  return (
    <Accordion defaultExpanded>
      <AccordionSummary>{`קבצים (${steps.length})`}</AccordionSummary>
      <AccordionDetails>
        <Stepper defaultActiveStepIds={['hebrew']} steps={steps} />
      </AccordionDetails>
    </Accordion>
  );
};

interface FormRowProps {
  children: ReactNode;
  label: string;
}

const FormRow: FC<FormRowProps> = ({ children, label }: FormRowProps) => (
  <Grid
    container
    spacing={2}
    style={{
      alignItems: 'center',
    }}
  >
    <Grid
      item
      style={{
        width: '33%',
      }}
    >
      <Typography noWrap>{label}</Typography>
    </Grid>
    <Grid
      item
      style={{
        width: '67%',
      }}
    >
      {children}
    </Grid>
  </Grid>
);

const FormAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary>{`טופס לקריאה`}</AccordionSummary>
      <AccordionDetails>
        <FormRow label="שם פרטי">
          <TextField variant="standard" value={'ליאור'} disabled />
        </FormRow>
        <FormRow label="שם משפחה">
          <TextField variant="standard" value={'דולב'} disabled />
        </FormRow>
      </AccordionDetails>
    </Accordion>
  );
};

const Default = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const onChange = (_event: React.SyntheticEvent, newValue: number): void => {
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

export interface PanelProps {}

const Panel: FC<PanelProps> = ({}: PanelProps) => {
  return (
    <RootContainer>
      <PanelHeader />
      <Default />
    </RootContainer>
  );
};

export default Panel;
