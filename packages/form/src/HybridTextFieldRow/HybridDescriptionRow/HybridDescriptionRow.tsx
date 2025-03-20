import { useTheme } from '@mui/material';
import type { FC } from 'react';
import { WarningAmberRounded as WarningAmberIcon } from '@mui/icons-material';
import HybridDescriptionTypography from './HybridDescriptionTypography';
import AutomaticRefetchButton from './AutomaticRefetchButton';

interface IHybridDescriptionRowProps {
  dataUpdatedAt: number;
  fetchError?: boolean;
  i18n: {
    fetchDataUpdatedAt: (formattedDate: string) => string;
    fetchFailed: string;
    manualInput: string;
  };
  isAutomatic: boolean;
  refetch: () => void;
}

const HybridDescriptionRow: FC<IHybridDescriptionRowProps> = ({
  dataUpdatedAt,
  fetchError: error,
  i18n: { fetchDataUpdatedAt, fetchFailed, manualInput },
  isAutomatic,
  refetch,
}) => {
  const { palette } = useTheme();
  const formattedDate = new Date(dataUpdatedAt).toLocaleTimeString('he-IL', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
      {isAutomatic ? (
        <>
          <AutomaticRefetchButton refetch={refetch} />
          <HybridDescriptionTypography>
            {!error ? fetchDataUpdatedAt(formattedDate) : fetchFailed}
          </HybridDescriptionTypography>
        </>
      ) : (
        <>
          <WarningAmberIcon style={{ color: palette.warning.dark }} />
          <HybridDescriptionTypography>{manualInput}</HybridDescriptionTypography>
        </>
      )}
    </div>
  );
};

export default HybridDescriptionRow;
