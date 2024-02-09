import { styled } from '@mui/material';
import Typography from '@horus-library/typography';
import type { FC } from 'react';

interface TubeProgressCaptionProps {
  value: number;
}

const Caption = styled(Typography)({
  paddingLeft: '1ch',
});

const TubeProgressCaption: FC<TubeProgressCaptionProps> = ({
  value,
}: TubeProgressCaptionProps) => <Caption variant="caption">{value}%</Caption>;

export default TubeProgressCaption;
