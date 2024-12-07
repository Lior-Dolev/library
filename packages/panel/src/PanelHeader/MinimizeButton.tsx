import type { IconButtonProps } from '@mui/material';
import MinimizeIcon from '@mui/icons-material/Remove';
import type { FC } from 'react';
import BaseActionButton from './BaseActionButton'

const MinimizeButton: FC<IconButtonProps> = (props: IconButtonProps) => (
  <BaseActionButton {...props}>
    <MinimizeIcon />
  </BaseActionButton>
);

export default MinimizeButton;
