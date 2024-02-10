import { css } from '@emotion/react';
import type { FC } from 'react';
import BaseTubeEdge, { type BaseTubePartProps } from './BaseTubePart';

const styleKey = {
  color: '--tube-color',
  value: '--tube-value',
};

const glassLookingCss = css`
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgb(0 0 0 / 14%) 0%,
      rgb(255 255 255 / 20%) 15%,
      rgb(238 238 238 / 53%) 20%,
      rgb(0 0 0 / 22%) 40%,
      rgb(0 0 0 / 15%) 90%,
      rgb(255 255 255 / 28%) 95%,
      rgb(0 0 0 / 19%) 100%
    );
  }
`;
const spaceForLiquidInGlassCss = css`
  &:before {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 100%;
  }
`;
const fillLiquidInGlassCss = css`
  &:before {
    background: var(${styleKey.color});
    height: var(${styleKey.value});
    animation: fill-tube 5s;
  }

  @keyframes fill-tube {
    0% {
      height: 0%;
    }
    100% {
      height: var(${styleKey.value});
    }
  }
`;

interface TubeBodyProps extends BaseTubePartProps {
  color: string;
  value: number;
}

const TubeBody: FC<TubeBodyProps> = ({
  color,
  css: cssProps,
  edgeHeight,
  value,
  ...rest
}: TubeBodyProps) => (
  <BaseTubeEdge
    style={
      {
        [styleKey.color]: color,
        [styleKey.value]: `${value}%`,
      } as any
    }
    css={[
      css`
        height: ${100 - edgeHeight * 2}%;
      `,
      glassLookingCss,
      spaceForLiquidInGlassCss,
      fillLiquidInGlassCss,
      cssProps,
    ]}
    {...rest}
  />
);

export default TubeBody;
