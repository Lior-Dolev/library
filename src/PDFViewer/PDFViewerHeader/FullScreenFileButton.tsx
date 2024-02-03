import { Fullscreen } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';

export interface FullScreenFileButtonProps {
  fileURL: string;
}

const FullScreenFileButton: FC<FullScreenFileButtonProps> = ({
  fileURL,
}: FullScreenFileButtonProps) => {
  return (
    <IconButton href={fileURL} target="_blank">
      <Fullscreen />
    </IconButton>
  );
};

export default FullScreenFileButton;
