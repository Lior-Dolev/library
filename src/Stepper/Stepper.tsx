import {
  Stepper as MUIStepper,
  Step,
  StepContent as MUIStepContent,
  Typography,
} from '@mui/material';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import StepIcon from './StepIcon';
import StepLabel from './StepLabel';

export interface StepperProps {
  steps: {
    content?: ReactNode;
    disabled?: boolean;
    error?: string;
    id: string;
    label: string;
    subLabel?: ReactNode;
  }[];
  defaultActiveStepIds?: string[];
}

const Stepper: FC<StepperProps> = ({
  defaultActiveStepIds = [],
  steps,
}: StepperProps) => {
  const reversedSteps = useMemo(() => [...steps].reverse(), [steps]);
  const stepsLength: number = steps?.length ?? 0;
  const [activeStepIds, setActiveStepIds] =
    useState<string[]>(defaultActiveStepIds);

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
    <MUIStepper orientation="vertical">
      {reversedSteps.map(
        ({ content, disabled, error, label, subLabel, id }, index) => (
          <Step
            key={id}
            completed
            active={activeStepIds.includes(id)}
            disabled={!content || disabled}
          >
            <StepLabel
              StepIconComponent={StepIcon}
              stepsLength={stepsLength}
              index={index}
              error={error}
              optional={subLabel}
              toggleStep={() => toggleStep(id)}
            >
              {label}
            </StepLabel>
            <MUIStepContent>
              {typeof content === 'string' ? (
                <Typography>{content}</Typography>
              ) : (
                content
              )}
            </MUIStepContent>
          </Step>
        )
      )}
    </MUIStepper>
  );
};

export default Stepper;
