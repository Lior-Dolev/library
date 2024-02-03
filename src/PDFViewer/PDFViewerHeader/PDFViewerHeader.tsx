import { Box, useTheme } from '@mui/material';
import { FC } from 'react';
import DownloadFileButton from './DownloadFileButton';
import FullScreenFileButton from './FullScreenFileButton';

export interface PDFViewerHeaderProps {
  fileName?: string;
  fileURL: string;
}

const PDFViewerHeader: FC<PDFViewerHeaderProps> = ({
  fileName = 'file.pdf',
  fileURL,
}: PDFViewerHeaderProps) => {
  const theme = useTheme();

  return (
    <Box height={50} boxShadow={theme.shadows[1]}>
      <DownloadFileButton fileName={fileName} fileURL={fileURL} />
      <FullScreenFileButton fileURL={fileURL} />
    </Box>
  );
};

export default PDFViewerHeader;
