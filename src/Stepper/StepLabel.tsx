import {
  StepLabel as MUIStepLabel,
  StepLabelProps as MUIStepLabelProps,
} from '@mui/material';
import { FC, ReactElement, ReactNode } from 'react';
import StepIcon from './StepIcon';
import { Tooltip } from '..';

export interface StepLabelProps {
  children: ReactNode;
  error?: string;
  index: number;
  StepIconComponent?: MUIStepLabelProps['StepIconComponent'];
  stepsLength: number;
  optional?: ReactNode;
  toggleStep: () => void;
}

interface StepLabelWrapperProps {
  children: ReactElement;
  error?: string;
}

const StepLabelWrapper: FC<StepLabelWrapperProps> = ({
  children,
  error,
}: StepLabelWrapperProps) => {
  return error ? (
    <Tooltip placement={'bottom-start'} title={error}>
      {children}
    </Tooltip>
  ) : (
    children
  );
};

const StepLabel: FC<StepLabelProps> = ({
  children,
  error,
  index,
  StepIconComponent = StepIcon,
  stepsLength,
  optional: subLabel,
  toggleStep,
}: StepLabelProps) => {
  return (
    <StepLabelWrapper error={error}>
      <MUIStepLabel
        StepIconComponent={StepIconComponent}
        StepIconProps={{
          icon: stepsLength - index,
          error: !!error,
        }}
        optional={subLabel}
        onClick={toggleStep}
      >
        {children}
      </MUIStepLabel>
    </StepLabelWrapper>
  );
};

export default StepLabel;
