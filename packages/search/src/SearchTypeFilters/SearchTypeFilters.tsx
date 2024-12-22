import { FC } from 'react';
import Typography from '@horus-library/typography';
import SearchTypeFilterButton from './SearchTypeFilterButton';
import { css } from '@emotion/react';

interface ISerachTypeFiltersProps {
  values: { type: string; label: string }[];
  selected: string;
  onSelect: (type: string) => void;
}

const searchTypeFiltersCss = css({
  display: 'flex',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '10px',
});
const SearchTypeFilters: FC<ISerachTypeFiltersProps> = ({
  values,
  selected,
  onSelect,
}) => {
  const title = 'סוג:';

  return (
    <div css={searchTypeFiltersCss}>
      <Typography>{title}</Typography>
      <SearchTypeFilterButton
        type={'all'}
        label={'הכל'}
        onSelectTypeFilter={onSelect}
        isSelected={'all' === selected}
      ></SearchTypeFilterButton>
      {values.map(({ type, label }) => (
        <SearchTypeFilterButton
          type={type}
          label={label}
          onSelectTypeFilter={onSelect}
          isSelected={type === selected}
        ></SearchTypeFilterButton>
      ))}
    </div>
  );
};

export default SearchTypeFilters;
