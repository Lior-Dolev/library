import type { Meta, StoryObj } from '@storybook/react';
import { PanelHeader, type PanelHeaderProps } from '@horus-library/panel';
import TubeProgress from '@horus-library/tube-progress';
import Caption, { CaptionList } from '@horus-library/caption';
import TitleIcon from '@mui/icons-material/LocalPizza';
import Typography from '@horus-library/typography';
import { css } from '@emotion/react';

const flexAlign = css({
  display: 'flex',
  alignItems: 'center',
});

const meta = {
  title: 'Panel/Panel Header',
  component: PanelHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'clicked onClose' },
  },
} as Meta<PanelHeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const rootText = `הזמנה מס 1234`;
const subText1 = `פלורנטין`;
const subText2 = `רחוב: 59`;

export const LastTube: Story = {
  render: (args) => (
    <PanelHeader {...args}>
      <div style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
        <Typography css={flexAlign} variant={'h6'} noWrap>
          {rootText}
          <TitleIcon />
        </Typography>
        <CaptionList>
          <Caption>{subText1}</Caption>
          <Caption>{subText2}</Caption>
        </CaptionList>
        <CaptionList>
          <Caption>{subText1}</Caption>
          <Caption>{subText2}</Caption>
        </CaptionList>
      </div>
      <TubeProgress value={80} />
    </PanelHeader>
  ),
};

export const FirstTube: Story = {
  render: (args) => (
    <PanelHeader {...args}>
      <TubeProgress value={80} />
      <div style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
        <Typography css={flexAlign} variant={'h6'} noWrap>
          {rootText}
          <TitleIcon />
        </Typography>
        <CaptionList>
          <Caption>{subText1}</Caption>
          <Caption>{subText2}</Caption>
        </CaptionList>
        <CaptionList>
          <Caption>{subText1}</Caption>
          <Caption>{subText2}</Caption>
        </CaptionList>
      </div>
    </PanelHeader>
  ),
};

export const NoTube: Story = {
  render: (args) => (
    <PanelHeader {...args}>
      <div style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
        <Typography css={flexAlign} variant={'h6'} noWrap>
          {rootText}
          <TitleIcon />
        </Typography>
        <CaptionList>
          <Caption>{subText1}</Caption>
          <Caption>{subText2}</Caption>
        </CaptionList>
        <CaptionList>
          <Caption>{subText1}</Caption>
          <Caption>{subText2}</Caption>
        </CaptionList>
      </div>
    </PanelHeader>
  ),
};
