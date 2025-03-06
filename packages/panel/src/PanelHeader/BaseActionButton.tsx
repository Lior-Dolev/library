import { IconButton, type IconButtonProps } from '@mui/material';
import type { FC } from 'react';

const BaseActionButton: FC<IconButtonProps> = (props: IconButtonProps) => (
  <IconButton  {...props}
    style={{ color: 'inherit', padding: 0, height: 'fit-content', }} />
);

export default BaseActionButton;
