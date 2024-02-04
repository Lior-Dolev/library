import type { Meta } from '@storybook/react';
import { Accordion, AccordionDetails, Typography } from '@mui/material';
import AccordionSummary from './AccordionSummary';
import { FileViewer, SourceDateStepSubLabel, Stepper, Tooltip } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Accordion',
  component: Accordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

export const Default = () => (
  <Accordion defaultExpanded>
    <AccordionSummary>
      <Tooltip title={'כותרת'}>
        <Typography>{'כותרת'}</Typography>
      </Tooltip>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש
        שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח
        דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
      </Typography>
    </AccordionDetails>
  </Accordion>
);

export const TitleTextOverflow = () => (
  <Accordion>
    <AccordionSummary>
      <Tooltip
        title={
          'פירוט המרכיבים ועוד הרבה דברים הרבה יותר ממה שיכול להיכנס באורך הזה'
        }
      >
        <Typography>
          {
            'פירוט המרכיבים ועוד הרבה דברים הרבה יותר ממה שיכול להיכנס באורך הזה'
          }
        </Typography>
      </Tooltip>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש
        שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח
        דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
      </Typography>
    </AccordionDetails>
  </Accordion>
);

/**
 *
 * @todo - Add invalid file indication
 */
export const FilesAccordion = () => {
  const steps = [
    {
      id: 'landscape',
      label: 'landscape.pdf',
      error: 'קובץ לא תקין בעליל',
      // content: <FileViewer src={'landscape.pdf'} height={300} />,
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
    <Accordion>
      <AccordionSummary>{`קבצים (${steps.length})`}</AccordionSummary>
      <AccordionDetails>
        <Stepper defaultActiveStepIds={['hebrew']} steps={steps} />
      </AccordionDetails>
    </Accordion>
  );
};
