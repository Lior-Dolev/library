import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FileViewer,
  Stepper,
} from '..';
import { SubLabel } from './SubLabel';

const fileSteps = [
  {
    id: 'first',
    label: 'landscape.pdf',
    content: <FileViewer src={'landscape.pdf'} height={300} />,
    subLabel: <SubLabel source={'סתם'} time={1700642439921} />,
  },
  {
    id: 'second',
    label: 'האוניברסיטה העברית.pdf',
    content: <FileViewer src={'עברית.pdf'} height={300} />,
    subLabel: <SubLabel source={'משרד החינוך'} time={1700642479921} />,
  },
];

export const FilesAccordion = () => (
  <Accordion>
    <AccordionSummary>{`קבצים (${fileSteps.length})`}</AccordionSummary>
    <AccordionDetails>
      <Stepper defaultActiveStepIds={['second']} steps={fileSteps} />
    </AccordionDetails>
  </Accordion>
);
