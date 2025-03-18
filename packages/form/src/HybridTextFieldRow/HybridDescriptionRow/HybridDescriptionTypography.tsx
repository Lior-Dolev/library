import { useTheme } from '@mui/material';
import type { FC } from 'react';
import Typography from '@horus-library/typography';

interface IHybridDescriptionTypographyProps {
  children: string;
}

const HybridDescriptionTypography: FC<IHybridDescriptionTypographyProps> = ({
  children,
}: IHybridDescriptionTypographyProps) => {
  const { palette } = useTheme();

  return <Typography style={{ color: palette.text.disabled }}>{children}</Typography>;
};

export default HybridDescriptionTypography;
