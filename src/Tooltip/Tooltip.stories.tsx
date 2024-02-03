import type { Meta } from '@storybook/react';
import { Typography } from '@mui/material';
import Tooltip, { TooltipProps } from './Tooltip';
import TubeProgress from '../TubeProgress';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Tooltip',
  component: Tooltip,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    title: 'שלום אני טולטיפ ויש לי הרבה מה להגיד',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

/**
 * Text with limited space should be wrapped with `Tooltip` for a11y
 */
export const TextEllipsis = ({ ...rest }: TooltipProps) => (
  <div
    style={{
      width: 100,
    }}
  >
    <Tooltip placement={'bottom-start'} {...rest}>
      <Typography noWrap variant="subtitle1">
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח
        איבן איף, ברומץ כלרשט מיחוצים.
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
  <Tooltip placement={'left'} title={'הפיצה שלך כמעט מוכנה'}>
    <TubeProgress value={80} />
  </Tooltip>
);
