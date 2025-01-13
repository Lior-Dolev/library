import { Chip, ChipProps } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { FC, useMemo } from 'react';
import { css } from '@emotion/react';

interface ISearchTypeFilterButtonProps extends ChipProps {
  type: string;
  isSelected: boolean;
  onSelectTypeFilter: (type: string) => void;
}

const baseCSS = (isSelected: boolean) =>
  css({
    width: '120px',
    height: '50px',
    borderRadius: 10,
    fontSize: 15,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isSelected ? '#2e7d32' : '#424242',
    '&:hover': {
      backgroundColor: isSelected ? '#1b5e20' : '#5a5a5a', // Darker tones on hover
    },
  });

const SearchTypeFilterButton: FC<ISearchTypeFilterButtonProps> = ({
  type,
  label,
  onSelectTypeFilter: onSelect,
  isSelected,
}) => {
  const icon = useMemo(
    () => (isSelected ? <DoneIcon fontSize="small" /> : <></>),
    [isSelected]
  );

  return (
    <Chip
      css={baseCSS(isSelected)}
      key={type}
      label={label}
      onClick={() => onSelect(type)}
      icon={icon}
    />
  );
};

export default SearchTypeFilterButton;
