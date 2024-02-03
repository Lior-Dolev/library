import { FC, ReactNode, useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { PDFViewerHeader } from './PDFViewerHeader';
import { styled } from '@mui/material';

const StyledDocument = styled(Document)({
  //   height: '500px',
  //   overflow: 'auto',
  flex: 1,
});

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

interface PDFViewerProps {
  fileName?: string;
  fileURL: string;
}

/**
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
const PDFViewer: FC<PDFViewerProps> = ({
  fileName,
  fileURL,
}: PDFViewerProps) => {
  const [pages, setPages] = useState<ReactNode>(null);
  const [href, setHref] = useState<string>();

  useEffect(() => {
    let blobFileURL: string;

    fetch(fileURL).then((response) => {
      response.blob().then((blob) => {
        blobFileURL = window.URL.createObjectURL(blob);

        setHref(blobFileURL);
      });
    });

    return () => {
      window.URL.revokeObjectURL(blobFileURL);
    };
  }, [fileURL]);

  const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy): void => {
    const pagesArray = Array.from({ length: numPages }, (_, index) => (
      <Page key={index + 1} pageNumber={index + 1} />
    ));

    setPages(<>{pagesArray}</>);
  };

  return (
    <div
      style={{
        width: 'fit-content',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PDFViewerHeader fileName={fileName} fileURL={fileURL} />
      <div
        style={{
          overflow: 'scroll',
          flex: 1,
        }}
      >
        <StyledDocument file={href} onLoadSuccess={onDocumentLoadSuccess}>
          {pages}
        </StyledDocument>
      </div>
    </div>
  );
};

export default PDFViewer;
