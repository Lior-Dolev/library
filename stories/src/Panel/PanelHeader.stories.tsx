import type { Meta, StoryObj } from '@storybook/react';
import { PanelHeader, type PanelHeaderProps } from '@horus-library/panel';
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

const rootText = `מס׳ 1234`;
const subText1 = `ליאורדו`;
const subText2 = `בית: א`;
const subText3 = `סוג: פיצות וסלטים`;
const status = `בהכנה`;

export const Default: Story = {
  render: (args) => (
    <PanelHeader {...args}>
      <div style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
        <Typography css={flexAlign} variant={'h6'} noWrap>
          {rootText}
          <TitleIcon
            style={{
              fill: 'mediumpurple',
              marginRight: '0.3em',
            }}
          />
        </Typography>
        <CaptionList>
          <Caption>{subText1}</Caption>
          <Caption>{subText2}</Caption>
        </CaptionList>
        <CaptionList>
          <Caption>{subText3}</Caption>
          <Caption>
            <span>סטטוס: </span>
            <span
              style={{
                border: '1px solid orange',
                padding: '0.2em',
                borderRadius: '0.3em',
              }}
            >
              {status}
            </span>
          </Caption>
        </CaptionList>
      </div>
    </PanelHeader>
  ),
};
