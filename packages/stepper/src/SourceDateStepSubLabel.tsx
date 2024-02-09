import type { FC, ReactNode } from 'react';
import Caption, { CaptionList } from '@horus-library/caption';
import { formatMilliSecondsDate } from './dateFormatter';

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
