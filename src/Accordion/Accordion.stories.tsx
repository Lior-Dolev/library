import type { Meta } from '@storybook/react';
import { Accordion, AccordionDetails, Typography } from '@mui/material';
import AccordionSummary from './AccordionSummary';
import { Tooltip } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Accordion',
  component: Accordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

const text =
  'פירוט המרכיבים ועוד הרבה דברים הרבה יותר ממה שיכול להיכנס באורך הזה';

export const Default = () => (
  <Accordion>
    <AccordionSummary aria-controls="panel2-content" id="panel2-header">
      <Tooltip title={text}>
        <Typography>{text}</Typography>
      </Tooltip>
    </AccordionSummary>
    <AccordionDetails>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
  </Accordion>
);
