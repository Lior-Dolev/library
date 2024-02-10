import { css } from '@emotion/react';
import type { FC } from 'react';
import TubeBody from './TubeBody';
import TubeEdge from './TubeEdge';

const tubeSizeCss = css({
  height: '50px',
  width: '10px',
});

interface TubePartsProps {
  color: string;
  edgeHeight: number;
  value: number;
}

const TubeParts: FC<TubePartsProps> = ({
  color,
  edgeHeight,
  value,
}: TubePartsProps) => {
  return (
    <div css={tubeSizeCss}>
      <TubeEdge edgeHeight={edgeHeight} />
      <TubeBody color={color} edgeHeight={edgeHeight} value={value} />
      <TubeEdge edgeHeight={edgeHeight} />
    </div>
  );
};

export default TubeParts;
