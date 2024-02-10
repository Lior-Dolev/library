import type { FC, ReactNode } from 'react';
import { Paper, styled } from '@mui/material';

const RootContainer = styled(Paper)({
  width: '100%',
  direction: 'rtl',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export interface PanelProps {
  children: ReactNode;
}

const Panel: FC<PanelProps> = ({ children }: PanelProps) => {
  return <RootContainer>{children}</RootContainer>;
};

export default Panel;
