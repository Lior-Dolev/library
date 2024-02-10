import type { Meta } from '@storybook/react';
import Panel, { type PanelProps } from '@horus-library/panel';
import { Default as TabsDefaultStory } from '../Tabs.stories';
import { Default as PanelHeaderDefaultStory } from './PanelHeader.stories';

const meta = {
  title: 'Panel/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<PanelProps>;

export default meta;

export const Default = () => (
  <div style={{ height: '500px', width: '300px' }}>
    <Panel>
      {PanelHeaderDefaultStory.render?.({ onClose: () => {} }, {})}
      <div style={{ overflow: 'auto', flex: 1 }}>
        <TabsDefaultStory />
      </div>
    </Panel>
  </div>
);
