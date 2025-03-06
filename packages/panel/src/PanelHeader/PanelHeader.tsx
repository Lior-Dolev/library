import type { FC, ReactNode } from 'react';
import { Skeleton, useTheme } from '@mui/material';
import { Box } from '@mui/material';
import CloseButton from './CloseButton';
import MinimizeButton from './MinimizeButton';
import { css } from '@emotion/react';

export interface PanelHeaderProps {
  children?: ReactNode;
  id?: string;
  /** display skeleton while loading */
  isLoading?: boolean;
  onClose: () => void;
  onMinimize?: () => void;
}

const flexCss = css({
  display: 'flex',
  width: '100%',
});

const paddedContentCss = css({
  gap: '0.5em',
  padding: '0.5em',
});

const baseCss = css({
  direction: 'rtl',
  flexGrow: 0,
});

const PanelHeader: FC<PanelHeaderProps> = ({ children, id, isLoading, onClose, onMinimize }: PanelHeaderProps) => {
  const theme = useTheme();

  return (
    <Box
      css={[
        baseCss,
        flexCss,
        css({
          boxShadow: theme.shadows[5],
          backgroundColor: theme.palette.secondary.main,
        }),
      ]}
      id={id}
    >
      <div css={[flexCss, paddedContentCss]}>
        {isLoading ? (
          <Skeleton
            animation={'wave'}
            style={{ minWidth: '5em', width: '100%' }}
          />
        ) : (
          children
        )}
      </div>
      <div style={{ padding: '8px', display: 'flex', gap: '5px' }}>
        {onMinimize && <MinimizeButton onClick={onMinimize} />}
        <CloseButton onClick={onClose} />
      </div>
    </Box>
  );
};

export default PanelHeader;
