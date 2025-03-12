import { css } from "@emotion/react";
import Button, { type ButtonProps } from "./Button";
import { forwardRef, type ForwardRefExoticComponent,type  RefAttributes } from "react";

const secondaryBaseCSS = css({
  '&&': {
    color: 'white',
    fontWeight: 600,
    transition: 'all 120s ease-in 0s',
    minWidth: 'unset',
    height: 'fit-content',
    width: 'fit-content',
  }
})

const secondaryColoredCSS = css({
  '&&': {
    color: '#99ccff',
    border: '1px solid #0061c2',
    backgroundColor: '#003a7533',
    boxShadow: `#003a751a 0px 2px 1px inset,
    #0b0d0e80 0px -3px 0px inset
    #0b0d0e 0px 1px 2px 0px`
  }
})
const secondaryColoredHoverCSS = css`
  &&.MuiButtonBase-root:hover {
    border-color: #0061c2;
    background-color: #003a75;  
  }
`
const secondaryTextHoverCSS = css`
  &&.MuiButtonBase-root:hover {
    background-color: #0366d645;  
  }
`
const secondaryReadOnlyCSS = css({
  opacity: 0.5
})

const SecondaryButton: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, ButtonProps>(({
  readOnly, variant, ...rest
}: ButtonProps) => (
  <Button 
    css={[
      secondaryBaseCSS, variant !== 'text' && secondaryColoredCSS,
      readOnly ? secondaryReadOnlyCSS : variant !== 'text' ? secondaryColoredHoverCSS : secondaryTextHoverCSS
    ]}
    readOnly={readOnly}
    variant={variant || 'outlined'}
    {...rest}
  />
))

export default SecondaryButton;