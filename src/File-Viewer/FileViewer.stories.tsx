import type { Meta } from '@storybook/react';
import { FileViewer } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'File Viewer',
  component: FileViewer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof FileViewer>;

export default meta;

export const Vertical = () => <FileViewer src="./עברית.pdf" height={400} />;

export const Horizontal = () => (
  <FileViewer src="./landscape.pdf" height={400} />
);
