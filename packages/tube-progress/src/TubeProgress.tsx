import { forwardRef, type FC } from 'react';
import { styled, useTheme } from '@mui/material';
import TubeProgressCaption from './TubeProgressCaption';
import './TubeProgress.css';

const TubeProgressWrapper = styled(`div`)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',
});
const TubePart = styled(`span`)({
  display: 'block',
  position: 'relative',
});

const TubeEdge = styled(TubePart)({
  height: '5%',
  background:
    'linear-gradient(90deg, #000 0%, #fff 15%, #eee 20%, #000 40%, #000 90%, #fff 95%, #000 100%)',
});

const TubeBody = styled(TubePart)({
  height: '90%',
});

interface ValuesConfig {
  dangerLimit: number;
  warningLimit: number;
}

export interface TubeProgressProps {
  /**
   * Hide value text caption
   */
  hideCaption?: boolean;

  /**
   * Precentage 1-100
   */
  value: number;

  /**
   * value from 0 to `dangerLimit` (not including) will have `danger` color.
   * value from `dangerLimit` to `warningLimit` (not including) will have `warning` color
   */
  rangesConfig?: ValuesConfig;
}

const TubeProgress: FC<TubeProgressProps> = forwardRef<
  HTMLDivElement,
  TubeProgressProps
>(
  (
    {
      hideCaption = false,
      value,
      rangesConfig: { dangerLimit, warningLimit } = {
        dangerLimit: 20,
        warningLimit: 40,
      },
      ...rest
    }: TubeProgressProps,
    ref?
  ) => {
    const theme = useTheme();
    const color: string =
      value < dangerLimit
        ? theme.palette.error.main
        : value < warningLimit
          ? theme.palette.warning.main
          : theme.palette.success.main;

    return (
      <TubeProgressWrapper ref={ref} {...rest}>
        {!hideCaption && <TubeProgressCaption value={value} />}
        <div
          className="bar-chart tube"
          style={
            {
              '--tube-value': `${value}%`,
              '--tube-color': color,
            } as any
          }
        >
          <TubeEdge />
          <TubeBody />
          <TubeEdge />
        </div>
      </TubeProgressWrapper>
    );
  }
);

export default TubeProgress;