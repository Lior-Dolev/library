import { styled } from '@mui/material';
import { DetailedHTMLProps, FC, IframeHTMLAttributes } from 'react';

export interface FileViewerProps
  extends DetailedHTMLProps<
    IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  > {
  src: string;
}

const IFrame = styled(`iframe`)({
  border: 0,
});

/**
 * Using browser's (chrome) default file viewer tool.
 *
 *
 *
 * 1. Get file as pdf from server:
 *  - It'll save unnessecary parsing
 *  - It's dangeraous using base64 because of JS string limitations (can exceed characters limit)
 * 2. Think of a smart way, in the future, for caching these files:
 *  - Files micro-service that fetches & serves files
 *  - This service should have smart caching for files:
 *      - Cache files for X minutes/hours
 *      - If file updates - clear from cache
 *      - If pod is close to reaching max space - clear oldest files
 */
const FileViewer: FC<FileViewerProps> = ({
  src,
  width = '100%',
  ...rest
}: FileViewerProps) => {
  return <IFrame style={{ border: 0 }} src={src} width={width} {...rest} />;
};

export default FileViewer;
