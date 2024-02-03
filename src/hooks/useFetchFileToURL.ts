import { useEffect, useState } from 'react';

/**
 * DON'T FORGET to use `window.URL.revokeObjectURL(windowURL);` on unmount!!
 * You need to revoke file from memory on unmount
 * @param response
 * @returns windowURL
 */
export const parseResponseToWindowURL = async (
  response: Response
): Promise<string> => {
  return response.blob().then((blob) => {
    return window.URL.createObjectURL(blob);
  });
};

export type FileType =
  | 'pdf'
  | 'html'
  | 'css'
  | 'javascript'
  | 'json'
  | 'jpeg'
  | 'png'
  | 'gif'
  | 'svg'
  | 'mp3'
  | 'wav'
  | 'mp4'
  | 'webm'
  | 'xml'
  | 'zip'
  | 'octet-stream';

const contentTypes: {
  [key in FileType]: string;
} = {
  pdf: 'application/pdf',
  html: 'text/html',
  css: 'text/css',
  javascript: 'application/javascript',
  json: 'application/json',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  mp3: 'audio/mpeg',
  wav: 'audio/wav',
  mp4: 'video/mp4',
  webm: 'video/webm',
  xml: 'application/xml',
  zip: 'application/zip',
  'octet-stream': 'application/octet-stream',
};

export const fetchHeadersByType = (type: FileType): HeadersInit => ({
  'Content-Type': contentTypes[type],
});

interface UseFileToURLParams {
  fetchFileAPI: string;
  headers?: HeadersInit;
  type: 'pdf';
}

export const useFetchFileToURL = ({
  fetchFileAPI,
  headers = {},
  type,
}: UseFileToURLParams) => {
  const [windowURL, setWindowURL] = useState<string>();

  useEffect(() => {
    let blobFileURL: string;

    fetch(fetchFileAPI, {
      method: 'GET',
      headers: { ...headers, ...fetchHeadersByType(type) },
    }).then((response) => {
      parseResponseToWindowURL(response).then((responseURL) => {
        blobFileURL = responseURL;

        setWindowURL(responseURL);
      });
    });

    return () => {
      window.URL.revokeObjectURL(blobFileURL);
    };
  }, [fetchFileAPI]);

  return windowURL;
};
