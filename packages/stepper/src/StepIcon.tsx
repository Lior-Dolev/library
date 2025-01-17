import {
  StepIcon as MUIStepIcon,
  type StepIconProps as MUIStepIconProps,
} from '@mui/material';

type CompletedIndication = 'V' | 'none';

export interface StepIconProps extends MUIStepIconProps {
  completedIndication?: CompletedIndication;
}

const StepIcon = ({
  completed: completedProps,
  completedIndication = 'none',
  ...rest
}: StepIconProps) => {
  const completed: boolean | undefined =
    completedIndication === 'none' ? false : completedProps;

  return <MUIStepIcon {...rest} completed={completed} active={true} />;
};

export default StepIcon;
