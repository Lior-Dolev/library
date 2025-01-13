import { css } from '@emotion/react';
import { Box } from '@mui/material';
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { FixedSizeList } from 'react-window';
import { GroupHeader, ResultItem } from './Search';
import SearchResultsList, { ListItem } from './SearchResultsList';
import SearchTypeFilters from './SearchTypeFilters/SearchTypeFilters';

export interface ISearchResultsDropdownProps {
  groupHeaders: GroupHeader[];
  resultItems: ListItem[];
  selectedTypeFilter: string;
  onTypeFilterClick: (type: string) => void;
  renderItem: (
    item: ResultItem,
    selected: boolean,
    onItemClick: (item: ResultItem) => void
  ) => JSX.Element;
  selectedOptionIndex: number;
  isLoading: boolean;
  onItemClick: (item: ResultItem) => void;
}

const dropdownCss = css({
  width: '500px',
  overflowY: 'auto',
  margin: 0,
  padding: '2px',
});

const SearchResultsDropdown: ForwardRefExoticComponent<
  ISearchResultsDropdownProps & RefAttributes<FixedSizeList<ListItem[]>>
> = forwardRef<FixedSizeList<ListItem[]>, ISearchResultsDropdownProps>(
  (
    {
      groupHeaders,
      onTypeFilterClick,
      renderItem,
      resultItems,
      selectedTypeFilter,
      selectedOptionIndex,
      onItemClick,
    }: ISearchResultsDropdownProps,
    ref
  ) => {
    return (
      <Box css={dropdownCss}>
        {/* Type Filters */}
        <SearchTypeFilters
          values={groupHeaders.map(({ primaryText, type }) => ({
            label: primaryText,
            type,
          }))}
          selected={selectedTypeFilter}
          onSelect={onTypeFilterClick}
        />

        {/* Results List */}

        <SearchResultsList
          groupHeaders={groupHeaders}
          resultItems={resultItems}
          renderItem={renderItem}
          selectedOptionIndex={selectedOptionIndex}
          ref={ref}
          onItemClick={onItemClick}
        />
      </Box>
    );
  }
);

export default SearchResultsDropdown;
