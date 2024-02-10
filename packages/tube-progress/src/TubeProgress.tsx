import {
  forwardRef,
  HTMLAttributes,
  DetailedHTMLProps,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react';
import { useTheme } from '@mui/material';
import { css } from '@emotion/react';
import TubeProgressCaption from './TubeProgressCaption';
import TubeParts from './TubeParts';

const flexAlignedItemsCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',
});

interface ValuesConfig {
  dangerLimit: number;
  warningLimit: number;
}

export interface TubeProgressProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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

const TubeProgress: ForwardRefExoticComponent<
  Omit<TubeProgressProps, 'ref'> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TubeProgressProps>(
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
      <div css={flexAlignedItemsCss} ref={ref} {...rest}>
        {!hideCaption && <TubeProgressCaption value={value} />}
        <TubeParts color={color} edgeHeight={5} value={value} />
      </div>
    );
  }
);

export default TubeProgress;
