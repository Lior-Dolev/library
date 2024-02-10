import { css } from '@emotion/react';
import type { FC } from 'react';
import BaseTubeEdge, { type BaseTubePartProps } from './BaseTubePart';

const tubeBlackEdgeCss = css({
  background:
    'linear-gradient(90deg, #000 0%, #fff 15%, #eee 20%, #000 40%, #000 90%, #fff 95%, #000 100%)',
});

const TubeEdge: FC<BaseTubePartProps> = ({
  css: cssProps,
  edgeHeight,
  ...rest
}: BaseTubePartProps) => (
  <BaseTubeEdge
    css={[
      tubeBlackEdgeCss,
      css`
        height: ${edgeHeight}%;
      `,
      cssProps,
    ]}
    {...rest}
  />
);

export default TubeEdge;
