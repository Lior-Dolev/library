import type { Meta } from '@storybook/react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FileViewer,
  SourceDateStepSubLabel,
  Stepper,
  Tooltip,
} from '..';
import TextField from '@mui/material/TextField';
import { FC, ReactNode } from 'react';
import Grid from '@mui/material/Grid';

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

export const FilesAccordion = () => {
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

export const FormAccordion = () => {
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
