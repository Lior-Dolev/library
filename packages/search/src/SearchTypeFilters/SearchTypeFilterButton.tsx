import { css } from '@emotion/react';
import DoneIcon from '@mui/icons-material/Done';
import { Chip, ChipProps } from '@mui/material';
import { FC, useMemo } from 'react';

interface ISearchTypeFilterButtonProps extends ChipProps {
  type: string;
  isSelected: boolean;
  onSelectTypeFilter: (type: string) => void;
}

const chipCSS = (isSelected: boolean) =>
  css({
    '&:hover': {
      backgroundColor: isSelected ? '#1b5e20' : '#5a5a5a', // Darker tones on hover
    },
    alignItems: 'center',
    backgroundColor: isSelected ? '#2e7d32' : '#424242',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row-reverse',
    fontSize: 15,
    height: '50px',
    justifyContent: 'center',
    width: '120px',
  });

const SearchTypeFilterButton: FC<ISearchTypeFilterButtonProps> = ({
  type,
  label,
  onSelectTypeFilter: onSelect,
  isSelected,
}) => {
  const icon = useMemo(
    () =>
      isSelected ? (
        <DoneIcon
          fontSize="small"
          style={{ position: 'absolute', right: '20px' }}
        />
      ) : (
        <></>
      ),
    [isSelected]
  );

  return (
    <Chip
      css={chipCSS(isSelected)}
      key={type}
      label={label}
      onClick={() => onSelect(type)}
      icon={icon}
    />
  );
};

export default SearchTypeFilterButton;
