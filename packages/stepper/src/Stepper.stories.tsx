import type { Meta } from '@storybook/react';
import { Stepper, SourceDateStepSubLabel } from '.';

const meta = {
  title: 'Stepper',
  component: Stepper,
  tags: ['autodocs'],
} as Meta<typeof Stepper>;

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
  return <Stepper steps={steps} />;
};
