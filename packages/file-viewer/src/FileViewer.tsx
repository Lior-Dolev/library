import { css } from '@emotion/react';
import type { DetailedHTMLProps, FC, IframeHTMLAttributes } from 'react';

export interface FileViewerProps
  extends DetailedHTMLProps<
    IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  > {
  src: string;
}

const noBorderCSS = css({
  border: 0,
});

/**
 * Using browser's (chrome) default file viewer tool.
 *
 * It is suggested to fetch files as files and not Base64 string,
 * because using Base64 with large files can easily reach JS string characters limit.
 *
 */
const FileViewer: FC<FileViewerProps> = ({
  src,
  width = '100%',
  ...rest
}: FileViewerProps) => {
  return <iframe css={noBorderCSS} src={src} width={width} {...rest} />;
};

export default FileViewer;
