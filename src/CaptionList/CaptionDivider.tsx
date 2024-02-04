import { styled } from '@mui/material';
import Divider, { DividerProps } from '@mui/material/Divider';
import { FC } from 'react';

export interface CaptionDividerProps extends DividerProps {}

const BaseDivider: FC<CaptionDividerProps> = ({
  orientation = 'vertical',
  variant = 'fullWidth',
  flexItem = true,
  ...rest
}: CaptionDividerProps) => (
  <Divider
    flexItem={flexItem}
    orientation={orientation}
    variant={variant}
    {...rest}
  />
);

const CaptionDivider = styled(BaseDivider)({
  borderColor: 'inherit',
});

export default CaptionDivider;
