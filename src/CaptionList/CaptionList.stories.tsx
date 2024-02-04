import type { Meta } from '@storybook/react';
import { Caption, CaptionList } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Caption List',
  component: CaptionList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof CaptionList>;

export default meta;

export const Default = () => (
  <CaptionList>
    <Caption>ATM</Caption>
    <Caption>{new Date(1700642479921).toDateString()}</Caption>
  </CaptionList>
);
