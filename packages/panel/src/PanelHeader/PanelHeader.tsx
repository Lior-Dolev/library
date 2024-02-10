import type { FC, ReactNode } from 'react';
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import CloseButton from './CloseButton';
import { css } from '@emotion/react';

export interface PanelHeaderProps {
  children?: ReactNode;
  onClose: () => void;
}

const fluidCss = css({
  display: 'flex',
  flex: 1,
  width: '100%',
});

const paddedContentCss = css({
  gap: '0.5em',
  padding: '0.5em',
});

const baseCss = css({
  direction: 'rtl',
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
        fluidCss,
        css({
          boxShadow: theme.shadows[5],
          backgroundColor: theme.palette.secondary.main,
        }),
      ]}
    >
      <div css={[fluidCss, paddedContentCss]}>{children}</div>
      <CloseButton onClick={onClose} />
    </Box>
  );
};

export default PanelHeader;
