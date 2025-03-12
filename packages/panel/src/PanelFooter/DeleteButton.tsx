import {
  type CSSProperties,
  forwardRef,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
} from 'react';
import FooterButton from './FooterButton';
import type { ButtonProps } from '@mui/material';

interface DeleteButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: ButtonProps['onClick'];
  readOnly?: boolean;
  style?: CSSProperties;
}

const DeleteButton: ForwardRefExoticComponent<DeleteButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  DeleteButtonProps
>(({ children, className, disabled, onClick, style, ...rest }: DeleteButtonProps, ref) => (
  <FooterButton
    className={className}
    disabled={disabled}
    onClick={onClick}
    style={style}
    type={'button'}
    variant={'outlined'}
    ref={ref}
    {...rest}
  >
    {children}
  </FooterButton>
));

export default DeleteButton;
