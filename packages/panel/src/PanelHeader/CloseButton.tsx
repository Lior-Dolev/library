import type { IconButtonProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/CloseSharp';
import type { FC } from 'react';
import BaseActionButton from './BaseActionButton'

const CloseButton: FC<IconButtonProps> = (props: IconButtonProps) => (
  <BaseActionButton {...props}>
    <CloseIcon />
  </BaseActionButton>
);

export default CloseButton;
