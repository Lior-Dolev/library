import type { Meta } from '@storybook/react';
import FileViewer from '@horus-library/file-viewer';

const meta = {
  title: 'Components/File Viewer',
  component: FileViewer,
  tags: ['autodocs'],
} as Meta<typeof FileViewer>;

export default meta;

export const Vertical = () => <FileViewer src="./עברית.pdf" height={400} />;

export const Horizontal = () => (
  <FileViewer src="./landscape.pdf" height={400} />
);
