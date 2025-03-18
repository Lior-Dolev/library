import { IconButton } from '@mui/material';
import type { FC } from 'react';
import { Refresh as RefreshIcon } from '@mui/icons-material';

interface IAutomaticRefetchButtonProps {
  refetch: () => void;
}

const AutomaticRefetchButton: FC<IAutomaticRefetchButtonProps> = ({ refetch }: IAutomaticRefetchButtonProps) => {
  return (
    <IconButton
      style={{ width: '1.5rem', height: '1.5rem', alignSelf: 'center' }}
      onClick={() => refetch()}
    >
      <RefreshIcon />
    </IconButton>
  );
};

export default AutomaticRefetchButton;
