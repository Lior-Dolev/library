import { IconButton } from '@mui/material';
import type { FC, ReactNode } from 'react';
import { Send } from '@mui/icons-material';
import Tooltip from '@horus-library/tooltip';
import { css } from '@emotion/react';

interface ISubmitMessageButtonProps {
  isLoading?: boolean;
  onClick: () => void;
  tooltipContent: ReactNode;
}

const spinnerCSS = css`
  width: 1em;
  height: 1em;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => <span css={spinnerCSS} />;

const SendIconRTLCss = css({
  transform: 'rotate(180deg)',
});

const SendIcon = () => <Send css={SendIconRTLCss} />;

const IconButtonFitHeightCss = css({
  height: 'fit-content',
});

const SubmitMessageButton: FC<ISubmitMessageButtonProps> = ({ isLoading, onClick, tooltipContent }) => {
  return (
    <Tooltip title={tooltipContent}>
      <IconButton
        onClick={() => onClick()}
        css={IconButtonFitHeightCss}
      >
        {!isLoading ? <SendIcon /> : <Spinner />}
      </IconButton>
    </Tooltip>
  );
};

export default SubmitMessageButton;
