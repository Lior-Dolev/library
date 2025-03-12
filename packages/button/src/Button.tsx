import {Button as MUIButton, type ButtonProps as MUIButtonProps} from '@mui/material'
import {type MouseEventHandler, forwardRef, type ForwardRefExoticComponent, type RefAttributes} from 'react'
import { ArrayInterpolation, css, Theme } from '@emotion/react'
import { clsx} from 'clsx';

const buttonSizeCSS = css({
  '&&.MuiButtonBase-root': {
    minWidth: '100px'
  }
})
const buttonEnabledPointerCSS = css({
  '&&.MuiButtonBase-root': {
    pointerEvents: 'auto'
  }
})

export interface ButtonProps extends MUIButtonProps {
  css?: ArrayInterpolation<Theme>
  readOnly?: boolean;
}

const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    className,
    css: cssProps = [],
    disabled,
    onClick,
    readOnly,
    ...rest
  }: ButtonProps, ref
) => {
  const _onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (disabled || readOnly) {
      return;
    }

    onClick?.(event);
  }

  return (
    <MUIButton
      className={clsx(className, {'Mui-disabled': readOnly})}
      css={[buttonSizeCSS, readOnly && buttonEnabledPointerCSS, ...cssProps]}
      disabled={disabled}
      disableTouchRipple={readOnly}
      onClick={_onClick}
      ref={ref}
      {...rest}
    />
  )
})

export default Button;