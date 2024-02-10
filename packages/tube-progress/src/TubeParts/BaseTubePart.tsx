import { type Interpolation, css } from '@emotion/react';
import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

const baseCss = css({
  display: 'block',
  position: 'relative',
});

interface InternalBaseTubePartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  css?: Interpolation<any>;
}

export interface BaseTubePartProps extends InternalBaseTubePartProps {
  edgeHeight: number;
}

const BaseTubePart: FC<InternalBaseTubePartProps> = ({
  css: cssProps,
  ...rest
}: InternalBaseTubePartProps) => <span css={[baseCss, cssProps]} {...rest} />;

export default BaseTubePart;
