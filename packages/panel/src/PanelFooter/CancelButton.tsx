import {
  type CSSProperties,
  forwardRef,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
} from 'react';
import FooterButton from './FooterButton';

interface CancelButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  readOnly?: boolean;
  style?: CSSProperties;
}

const CancelButton: ForwardRefExoticComponent<CancelButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  CancelButtonProps
>(({ children, className, onClick, style, ...rest }: CancelButtonProps, ref) => (
  <FooterButton
    className={className}
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

export default CancelButton;
