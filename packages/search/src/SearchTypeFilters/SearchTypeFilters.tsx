import { FC } from 'react';
import Typography from '@horus-library/typography';
import SearchTypeFilterButton from './SearchTypeFilterButton';
import { css } from '@emotion/react';

interface ISerachTypeFiltersProps {
  values: { type: string; label: string }[];
  selected: string;
  onSelect: (type: string) => void;
}

const divCss = css({ display: 'flex', flexDirection: 'row-reverse' });

const searchTypeFiltersCss = css({
  display: 'flex',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
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
    <div css={divCss}>
      <Typography>{title}</Typography>
      <div css={searchTypeFiltersCss}>
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
