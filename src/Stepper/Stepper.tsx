import {
  Stepper as StyledStepper,
  Step,
  StepContent as StyledStepContent,
  StepLabel as StyledStepLabel,
  Typography,
} from '@mui/material';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import StepIcon from './StepIcon';

export interface StepperProps {
  steps: {
    content?: ReactNode;
    id: string;
    label: string;
    subLabel?: ReactNode;
  }[];
}

const Stepper: FC<StepperProps> = ({ steps }: StepperProps) => {
  const reversedSteps = useMemo(() => [...steps].reverse(), [steps]);
  const stepsLength: number = steps?.length ?? 0;
  const [activeStepIds, setActiveStepIds] = useState<string[]>([]);

  const toggleStep = useCallback(
    (id: string) => {
      setActiveStepIds((prev) => {
        if (prev.includes(id)) {
          return prev.filter((prevId) => prevId !== id);
        }

        return [...prev, id];
      });
    },
    [setActiveStepIds]
  );

  return (
    <StyledStepper orientation="vertical">
      {reversedSteps.map(({ label, content, subLabel, id }, index) => (
        <Step
          key={id}
          completed
          active={activeStepIds.includes(id)}
          disabled={!content}
        >
          <StyledStepLabel
            StepIconComponent={StepIcon}
            StepIconProps={{
              icon: stepsLength - index,
            }}
            optional={subLabel}
            onClick={() => toggleStep(id)}
          >
            {label}
          </StyledStepLabel>
          <StyledStepContent>
            {typeof content === 'string' ? (
              <Typography>{content}</Typography>
            ) : (
              content
            )}
          </StyledStepContent>
        </Step>
      ))}
    </StyledStepper>
  );
};

export default Stepper;
