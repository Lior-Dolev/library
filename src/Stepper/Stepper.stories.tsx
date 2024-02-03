import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';
import { Divider, Typography, styled } from '@mui/material';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Stepper',
  component: Stepper,
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const Description = styled(`div`)({
  display: 'flex',
  gap: '5px',
});

const StyledDivider = styled(Divider)({
  borderColor: 'inherit',
});
const DescriptionDivider = () => (
  <StyledDivider orientation="vertical" variant="fullWidth" flexItem />
);

const SubLabel = ({ source, time }: { source: string; time: number }) => (
  <>
    <Description>
      <Typography variant="caption">{source}</Typography>
      <DescriptionDivider />
      <Typography variant="caption">{new Date(time).toDateString()}</Typography>
    </Description>
  </>
);

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

export const Default = () => {
  return <Stepper steps={steps} />;
};
