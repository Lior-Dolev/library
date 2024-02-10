import type { Meta, StoryObj } from '@storybook/react';
import { PanelHeader, type PanelHeaderProps } from '@horus-library/panel';
import TubeProgress from '@horus-library/tube-progress';
import Caption, { CaptionList } from '@horus-library/caption';
import TitleIcon from '@mui/icons-material/LocalPizza';
import Typography, { TypographyProps } from '@horus-library/typography';
import { styled } from '@mui/material';

const Title = ({ variant = 'h6', ...rest }: TypographyProps) => (
  <Typography variant={variant} {...rest} />
);
const StyledTitle = styled(Title)({
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
  argTypes: { onClose: { action: 'clicked onClose' } },
} as Meta<PanelHeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const rootText = `הזמנה מס 1234`;
const subText1 = `פלורנטין`;
const subText2 = `רחוב: 59`;

const Content = () => (
  <>
    <div style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
      <StyledTitle noWrap>
        {rootText}
        <TitleIcon />
      </StyledTitle>
      <CaptionList>
        <Caption>{subText1}</Caption>
        <Caption>{subText2}</Caption>
      </CaptionList>
    </div>
    <TubeProgress value={80} />
  </>
);

export const Default: Story = {
  args: {
    children: <Content />,
  },
};
