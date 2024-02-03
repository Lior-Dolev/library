import {
  StepIcon as MUIStepIcon,
  StepIconProps as MUIStepIconProps,
} from "@mui/material";

type CompletedIndication = "V" | "none";

interface StepIconProps extends MUIStepIconProps {
  completedIndication?: CompletedIndication;
}

const StepIcon = ({
  completed: completedProps,
  completedIndication = "none",
  ...rest
}: StepIconProps) => {
  const completed: boolean | undefined =
    completedIndication === "none" ? false : completedProps;

  return <MUIStepIcon {...rest} completed={completed} active={true} />;
};

export default StepIcon;
