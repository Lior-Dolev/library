import type { FC, ReactNode } from 'react';
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import CloseButton from './CloseButton';
import { css } from '@emotion/react';

export interface PanelHeaderProps {
  children?: ReactNode;
  onClose: () => void;
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

const PanelHeader: FC<PanelHeaderProps> = ({
  children,
  onClose,
}: PanelHeaderProps) => {
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
    >
      <div css={[flexCss, paddedContentCss]}>{children}</div>
      <CloseButton onClick={onClose} />
    </Box>
  );
};

export default PanelHeader;
