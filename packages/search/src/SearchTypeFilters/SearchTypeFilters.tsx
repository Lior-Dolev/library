import { FC } from 'react';
import Typography from '@horus-library/typography';
import SearchTypeFilterButton from './SearchTypeFilterButton';
import { css } from '@emotion/react';

interface ISerachTypeFiltersProps {
  values: { type: string; label: string }[];
  selected: string;
  onSelect: (type: string) => void;
}

const divCSS = css({ display: 'flex', flexDirection: 'row-reverse' });

const searchTypeFiltersCSS = css({
  display: 'flex',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '10px',
  padding: '5px',
});

const title = 'סוג:';

const SearchTypeFilters: FC<ISerachTypeFiltersProps> = ({
  values,
  selected,
  onSelect,
}) => {
  return (
    <div css={divCSS}>
      <Typography>{title}</Typography>
      <div css={searchTypeFiltersCSS}>
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
    </div>
  );
};

export default SearchTypeFilters;
