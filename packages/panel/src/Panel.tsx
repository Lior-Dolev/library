import type { CSSProperties, FC, ReactNode } from 'react';
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
  className?: string;
  style?: CSSProperties;
}

const Panel: FC<PanelProps> = ({ children, className, style }: PanelProps) => {
  return (
    <RootContainer
      className={className}
      style={style}
    >
      {children}
    </RootContainer>
  );
};

export default Panel;
