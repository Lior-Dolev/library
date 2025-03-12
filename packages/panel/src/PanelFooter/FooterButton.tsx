import { Button as MUIButton, type ButtonProps } from '@mui/material';
import { SecondaryButton } from '@horus-library/button';
import { forwardRef, type ForwardRefExoticComponent, type MouseEventHandler, type RefAttributes, useMemo } from 'react';
import { css } from '@emotion/react';
import { clsx } from 'clsx';

const buttonSizeCSS = css({
  minWidth: '100px',
});
const buttonEnabledPointerCSS = css({
  '&&': {
    pointerEvents: 'auto',
  },
});

interface FooterButtonProps extends ButtonProps {
  readOnly?: boolean;
}

const FooterButton: ForwardRefExoticComponent<FooterButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  FooterButtonProps
>(({ className, disabled, onClick, type, readOnly, ...rest }: FooterButtonProps, ref) => {
  const Button = useMemo(() => (type === 'submit' ? MUIButton : SecondaryButton), [type]);

  const _onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (disabled || readOnly) {
      return;
    }

    onClick?.(event);
  };

  return (
    <Button
      className={clsx(className, { 'Mui-disabled': readOnly })}
      css={[buttonSizeCSS, readOnly && buttonEnabledPointerCSS]}
      disabled={disabled}
      disableTouchRipple={readOnly}
      onClick={_onClick}
      ref={ref}
      {...rest}
    />
  );
});

export default FooterButton;
