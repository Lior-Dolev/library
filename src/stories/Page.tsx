import React from 'react';
import { Paper, styled } from '@mui/material';
import PanelHeader from '../PanelHeader';
import { Accordion, AccordionDetails, AccordionSummary, Stepper } from '..';
import { SubLabel } from './SubLabel';
import { FilesAccordion } from './FilesAccordion';

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
    subLabel: <SubLabel source={'ATM'} time={1700642439921} />,
  },
  {
    id: 'second',
    label: 'הבקשה הגיעה אל בנק ישראל ',
    content: 'סתם עוד פירוט על הבקשה אם יש',
    subLabel: <SubLabel source={'בנק ישראל'} time={1700642479921} />,
  },
  {
    id: 'third',
    label: 'הבקשה אושרה',
    content: `יש אישור לבצע את העברת הכספים. האישור ניתן ע״י זיבי זובי ותועד במערכת סוכריה על מקל`,
    subLabel: <SubLabel source={'בנק ישראל'} time={1706642479921} />,
  },
];

export const Page: React.FC = () => {
  return (
    <RootContainer>
      <PanelHeader />
      <div>ssdkmfdksl</div>
      <div>
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
      </div>
    </RootContainer>
  );
};
