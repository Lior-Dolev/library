import {
  AccordionSummary as MUIAccordionSummary,
  AccordionSummaryProps,
  styled,
} from '@mui/material';
import { FC } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export type { AccordionSummaryProps };

const StyledAccordionSummary = styled(MUIAccordionSummary)`
  .MuiAccordionSummary-content {
    width: calc(100% - 24px);
  }
`;

const AccordionSummary: FC<AccordionSummaryProps> = ({
  ...rest
}: AccordionSummaryProps) => (
  <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} {...rest} />
);

export default AccordionSummary;
