import type { Meta, StoryObj } from '@storybook/react';
import FileViewer, { type FileViewerProps } from '@horus-library/file-viewer';

const meta = {
  title: 'Components/File Viewer',
  component: FileViewer,
  tags: ['autodocs'],
} as Meta<FileViewerProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    src: './עברית.pdf',
    height: 400,
  },
};

export const Horizontal: Story = {
  args: {
    src: './landscape.pdf',
    height: 400,
  },
};
