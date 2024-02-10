import type { Meta } from '@storybook/react';
import Caption, { CaptionList } from '@horus-library/caption';

const meta = {
  title: 'Components/Caption List',
  component: CaptionList,
  tags: ['autodocs'],
} as Meta<typeof CaptionList>;

export default meta;

export const Default = () => (
  <CaptionList>
    <Caption>ATM</Caption>
    <Caption>{new Date(1700642479921).toDateString()}</Caption>
  </CaptionList>
);
