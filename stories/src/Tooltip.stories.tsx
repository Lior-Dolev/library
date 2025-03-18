import type { Meta, StoryObj } from '@storybook/react';
import Tooltip, { TooltipProps } from '@horus-library/tooltip';
import TubeProgress from '@horus-library/tube-progress';
import Typography from '@horus-library/typography';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    title: 'שלום אני טולטיפ ויש לי הרבה מה להגיד',
  },
} as Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomValuesConfig: Story = {
  args: {
    title: `שלום אני טולטיפ ויש לי הרבה מה להגיד`,
    placement: 'bottom-start',
    children: <div style={{ width: '100%', direction: 'rtl' }}>איפסום לורם</div>,
    open: true,
  },
};

/**
 * Text with limited space should be wrapped with `Tooltip` for a11y
 */
export const TextEllipsis = ({ ...rest }: TooltipProps) => (
  <div
    style={{
      width: 100,
    }}
  >
    <Tooltip
      placement={'bottom-start'}
      {...rest}
    >
      <Typography
        noWrap
        variant="subtitle1"
      >
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.
      </Typography>
    </Tooltip>
  </div>
);

/**
 * It's important to wrap visual components with `Tooltip`
 * to make sure everyone understand the visualization
 *
 */
export const TubeProgressTooltip = () => (
  <Tooltip
    placement={'left'}
    title={'הפיצה שלך כמעט מוכנה'}
  >
    <TubeProgress value={80} />
  </Tooltip>
);
