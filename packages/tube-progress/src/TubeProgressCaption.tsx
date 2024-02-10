import Caption from '@horus-library/caption';
import { css } from '@emotion/react';
import type { FC } from 'react';

interface TubeProgressCaptionProps {
  value: number;
}

const fixPercentageAlignmentCss = css({
  paddingLeft: '1ch',
});

const TubeProgressCaption: FC<TubeProgressCaptionProps> = ({
  value,
}: TubeProgressCaptionProps) => (
  <Caption css={fixPercentageAlignmentCss}>{value}%</Caption>
);

export default TubeProgressCaption;
