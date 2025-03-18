import { css } from '@emotion/react';
import { type FormHTMLAttributes, forwardRef, type ForwardRefExoticComponent, type RefAttributes } from 'react';

const baseFormCSS = css({
  overflowY: 'scroll',
  height: '100%',
});

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

const Form: ForwardRefExoticComponent<FormProps & RefAttributes<HTMLFormElement>> = forwardRef<
  HTMLFormElement,
  FormProps
>(({ ...rest }: FormProps, ref) => {
  return (
    <form
      css={baseFormCSS}
      ref={ref}
      {...rest}
    />
  );
});

export default Form;
