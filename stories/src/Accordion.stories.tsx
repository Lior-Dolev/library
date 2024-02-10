import type { Meta } from '@storybook/react';
import Accordion, {
  AccordionSummary,
  AccordionDetails,
} from '@horus-library/accordion';
import Typography from '@horus-library/typography';
import FileViewer from '@horus-library/file-viewer';
import Tooltip from '@horus-library/tooltip';
import Stepper, { SourceDateStepSubLabel } from '@horus-library/stepper';
import TextField from '@mui/material/TextField';
import type { FC, ReactNode } from 'react';
import Grid from '@mui/material/Grid';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} as Meta<typeof Accordion>;

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

const steps1 = [
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
export const MultiAccordions = () => {
  return (
    <div role="tabpanel">
      <Accordion>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          מסלול הפיצה
        </AccordionSummary>
        <AccordionDetails>
          <Stepper steps={steps1} />
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
  );
};
