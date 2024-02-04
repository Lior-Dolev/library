import {
  AccordionSummary as MUIAccordionSummary,
  AccordionSummaryProps as MUIAccordionSummaryProps,
} from '@mui/material';
import { FC, ReactNode } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordionSummaryProps extends MUIAccordionSummaryProps {
  expandIcon?: ReactNode | boolean;
}

const AccordionSummary: FC<AccordionSummaryProps> = ({
  expandIcon = true,
  ...rest
}: AccordionSummaryProps) => {
  const expandIconComponent: ReactNode =
    typeof expandIcon === 'boolean' ? (
      <ExpandMoreIcon key={'expand-icon'} />
    ) : (
      expandIcon
    );

  return <MUIAccordionSummary expandIcon={expandIconComponent} {...rest} />;
};

export default AccordionSummary;
