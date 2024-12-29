import { Chip, ChipProps } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { FC, useMemo } from 'react';
import { css } from '@emotion/react';

interface ISearchTypeFilterButtonProps extends ChipProps {
  type: string;
  isSelected: boolean;
  onSelectTypeFilter: (type: string) => void;
}

const selectedTypeCss = css({
  backgroundColor: 'green',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkgreen', // Darker green when hovered while selected
  },
});
const baseCss = css({
  width: '120px',
  height: '50px',
  borderRadius: 10,
  fontSize: 15,
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'center',
});

const SearchTypeFilterButton: FC<ISearchTypeFilterButtonProps> = ({
  type,
  label,
  onSelectTypeFilter: onSelect,
  isSelected,
}) => {
  const cssStyles = useMemo(() => {
    return !isSelected ? [baseCss] : [baseCss, selectedTypeCss];
  }, [isSelected]);

  return (
    <Chip
      css={cssStyles}
      key={type}
      label={label}
      onClick={() => onSelect(type)}
      icon={isSelected ? <DoneIcon fontSize="small" /> : <></>}
    />
  );
};

export default SearchTypeFilterButton;
