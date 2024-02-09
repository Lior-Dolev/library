import { css } from '@emotion/react';
import { Divider, type DividerProps } from '@mui/material';
import type { FC } from 'react';

export interface CaptionDividerProps extends DividerProps {}

const borderClass = css`
  border-color: inherit;
`;

const CaptionDivider: FC<CaptionDividerProps> = ({
  orientation = 'vertical',
  variant = 'fullWidth',
  flexItem = true,
  ...rest
}: CaptionDividerProps) => (
  <Divider
    css={borderClass}
    flexItem={flexItem}
    orientation={orientation}
    variant={variant}
    {...rest}
  />
);

export default CaptionDivider;
