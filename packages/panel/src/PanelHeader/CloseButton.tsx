import { IconButton, type IconButtonProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/CloseSharp';
import type { FC } from 'react';
import { css } from '@emotion/react';

const avoidHeightStretchCss = css({
  height: 'fit-content',
});
const themeColorCss = css({
  color: 'inherit',
});
const baseCss = [avoidHeightStretchCss, themeColorCss];

const CloseButton: FC<IconButtonProps> = (props: IconButtonProps) => (
  <IconButton css={baseCss} {...props}>
    <CloseIcon />
  </IconButton>
);

export default CloseButton;
