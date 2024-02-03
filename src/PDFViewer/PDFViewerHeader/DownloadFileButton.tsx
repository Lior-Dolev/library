import { Download } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';

export interface DownloadFileButtonProps {
  fileName: string;
  fileURL: string;
}

const DownloadFileButton: FC<DownloadFileButtonProps> = ({
  fileName,
  fileURL,
}: DownloadFileButtonProps) => {
  return (
    <IconButton href={fileURL} download={fileName}>
      <Download />
    </IconButton>
  );
};

export default DownloadFileButton;
