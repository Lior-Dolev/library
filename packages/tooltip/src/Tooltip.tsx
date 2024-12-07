import {
  Tooltip as MUITooltip,
  type TooltipProps,
  tooltipClasses,
} from '@mui/material';
import type { FC } from 'react';
import Typography from '@horus-library/typography'

export type { TooltipProps };

const Tooltip: FC<TooltipProps> = ({ title, ...rest }: TooltipProps) => (
  <MUITooltip
    slotProps={{
      popper: {
        sx: {
          [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
          {
            marginTop: '0px',
          },
          [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
          {
            marginBottom: '0px',
          },
          [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
          {
            marginLeft: '0px',
          },
          [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
          {
            marginRight: '0px',
          },
        },
      },
    }}
    title={typeof title === 'string' ? <Typography>{title}</Typography> : title}
    {...rest}
  />
);

export default Tooltip;
