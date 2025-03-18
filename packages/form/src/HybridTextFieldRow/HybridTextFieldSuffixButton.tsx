import Tooltip from '@horus-library/tooltip';
import Typography from '@horus-library/typography';
import { IconButton } from '@mui/material';
import { AutoMode as AutoModeIcon, Edit as EditIcon } from '@mui/icons-material';
import type { FC } from 'react';

interface IHybridTextFieldSuffixButtonProps {
  i18n: {
    switchToAutomated: string;
    switchToManual: string;
  };
  isAutomatic: boolean;
  readOnly: boolean;
  toggle: () => void;
}

const HybridTextFieldSuffixButton: FC<IHybridTextFieldSuffixButtonProps> = ({
  i18n: { switchToAutomated, switchToManual },
  isAutomatic,
  readOnly,
  toggle,
}: IHybridTextFieldSuffixButtonProps) => {
  return (
    <Tooltip title={<Typography>{isAutomatic ? switchToManual : switchToAutomated}</Typography>}>
      <IconButton
        disabled={readOnly}
        onClick={() => toggle()}
        style={{ width: '1.5rem', height: '1.5rem', alignSelf: 'center' }}
      >
        {isAutomatic ? <EditIcon /> : <AutoModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default HybridTextFieldSuffixButton;
