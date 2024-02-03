import type { Meta, StoryObj } from '@storybook/react';
import PDFViewer from './PDFViewer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/PDFViewer',
  component: PDFViewer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PDFViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     fileURL: './pdf-file-example.pdf',
//   },
// };

export const Primary = () => (
  <div style={{ height: 500 }}>
    <PDFViewer fileURL="./pdf-file-example.pdf" />
  </div>
);
