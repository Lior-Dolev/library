import {
  type CSSProperties,
  forwardRef,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
} from 'react';
import FooterButton from './FooterButton';
import type { ButtonProps } from '@mui/material';

interface SubmitButtonProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: ButtonProps['onClick'];
  readOnly?: boolean;
  style?: CSSProperties;
  id?: string;
}

const SubmitButton: ForwardRefExoticComponent<SubmitButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  SubmitButtonProps
>(({ className, children, disabled, onClick, style, id, ...rest }: SubmitButtonProps, ref) => (
  <FooterButton
    className={className}
    onClick={onClick}
    disabled={disabled}
    style={style}
    type={'submit'}
    variant={'contained'}
    ref={ref}
    id={id}
    {...rest}
  >
    {children}
  </FooterButton>
));

export default SubmitButton;
