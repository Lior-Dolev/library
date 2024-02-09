import {
  Tooltip as MUITooltip,
  type TooltipProps,
  tooltipClasses,
} from '@mui/material';
import type { FC } from 'react';

export type { TooltipProps };

const Tooltip: FC<TooltipProps> = ({ ...rest }: TooltipProps) => (
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
    {...rest}
  />
);

export default Tooltip;
