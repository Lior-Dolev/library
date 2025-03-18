import { DialogTitle as BaseDialogTitle, type DialogTitleProps as BaseDialogTitleProps } from '@mui/material';
import type { FC, MouseEventHandler } from 'react';
import { CloseButton } from '@horus-library/button';
import { css } from '@emotion/react';

export interface DialogTitleProps extends BaseDialogTitleProps {
  onClose?: MouseEventHandler<HTMLButtonElement>;
}

const baseDialogTitleCSS = css({
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'baseline',
  position: 'relative',
});

const baseEllipsisTextCSS = css({
  flexWrap: 'wrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
});
const titleWithCloseIconCSS = css({
  marginLeft: '20px',
});
const baseCloseButtonCSS = css({
  position: 'absolute',
  top: '8px',
  left: '8px',
});

const DialogTitle: FC<DialogTitleProps> = ({ onClose, children, ...rest }) => {
  return (
    <BaseDialogTitle
      css={baseDialogTitleCSS}
      {...rest}
    >
      <span css={[baseEllipsisTextCSS, onClose && titleWithCloseIconCSS]}>{children}</span>
      <CloseButton
        css={baseCloseButtonCSS}
        onClick={onClose}
      />
    </BaseDialogTitle>
  );
};

export default DialogTitle;
