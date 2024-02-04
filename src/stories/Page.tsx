import React from 'react';
import { Paper, styled } from '@mui/material';
import PanelHeader from '../PanelHeader';
import { Default } from '../Tabs/Tabs.stories';

const RootContainer = styled(Paper)({
  width: `300px`,
  height: '700px',
  direction: 'rtl',
});

export const Page: React.FC = () => {
  return (
    <RootContainer>
      <PanelHeader />
      <Default />
    </RootContainer>
  );
};
