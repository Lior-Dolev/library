import { FC, ReactNode } from 'react';
import { Caption, CaptionList } from '..';
import { formatMilliSecondsDate } from '../formatters';

export interface SourceDateStepSubLabelProps {
  source: ReactNode;
  time: number;
}

const SourceDateStepSubLabel: FC<SourceDateStepSubLabelProps> = ({
  source,
  time,
}: SourceDateStepSubLabelProps) => (
  <CaptionList>
    <Caption>{source}</Caption>
    <Caption>{formatMilliSecondsDate(time, { shortYear: true })}</Caption>
  </CaptionList>
);

export default SourceDateStepSubLabel;
