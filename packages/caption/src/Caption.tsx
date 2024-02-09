import { Typography, type TypographyProps } from '@horus-library/typography';
import type { FC } from 'react';

export interface CaptionProps extends TypographyProps {}

const Caption: FC<CaptionProps> = ({
  variant = 'caption',
  ...rest
}: CaptionProps) => <Typography variant={variant} {...rest} />;

export default Caption;
