import { SvgIcon, useTheme, type SvgIconProps as MUISvgIconProps } from '@mui/material';
import { type FC, type ReactNode, useMemo } from 'react';

interface SvgIconProps extends MUISvgIconProps {
  children?: ReactNode;
  size?: MUISvgIconProps['width'];
}

const defaultColor = '#FF156D';
const strokeWidth = '15';
const radialGradientId = 'loader-radial-gradient';
const LoaderIcon: FC<SvgIconProps> = ({ children, size = '1em', style = {}, ...rest }: SvgIconProps) => {
  const { palette } = useTheme();
  const color = useMemo(() => palette.primary.main ?? defaultColor, [palette.primary.main]);

  return (
    <SvgIcon
      viewBox={'0 0 158 158'}
      style={{ ...style, height: size, width: size, fill: 'transparent' }}
      {...rest}
    >
      <radialGradient
        id={radialGradientId}
        cx={'127.64083'}
        fx={'127.64083'}
        cy={'69.666412'}
        fy={'69.666412'}
        gradientTransform={'matrix(0.98993272,0,0,1.0101697,-20.784272,-20.952178)'}
        r={'78.205208'}
        gradientUnits={'userSpaceOnUse'}
      >
        <stop
          offset={'0'}
          stopColor={color}
        />
        <stop
          offset={'.3'}
          stopColor={color}
          stopOpacity={'.9'}
        />
        <stop
          offset={'.6'}
          stopColor={color}
          stopOpacity={'.6'}
        />
        <stop
          offset={'.8'}
          stopColor={color}
          stopOpacity={'.3'}
        />
        <stop
          offset={'1'}
          stopColor={color}
          stopOpacity={'.0'}
        />
      </radialGradient>
      <circle
        transform-origin={'center'}
        fill={'none'}
        stroke={`url(#${radialGradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeDasharray={'200 100'}
        strokeDashoffset={'0'}
        cx={'79.215729'}
        cy={'79.047821'}
        r={'70'}
      >
        <animateTransform
          type={'rotate'}
          attributeName={'transform'}
          calcMode={'spline'}
          dur={'2'}
          values={'360;0'}
          keyTimes={'0;1'}
          keySplines={'0 0 1 1'}
          repeatCount={'indefinite'}
        />
      </circle>
      <circle
        transform-origin={'center'}
        // fill={'color'}
        opacity={'.2'}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        cx={'79.215729'}
        cy={'79.047821'}
        r={'70'}
      />
      {children}
    </SvgIcon>
  );
};

export default LoaderIcon;
