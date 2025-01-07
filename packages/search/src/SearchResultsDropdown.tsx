import { css } from '@emotion/react';
import { Box } from '@mui/material';
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useMemo,
} from 'react';
import { FixedSizeList } from 'react-window';
import { GroupHeader, ResultItem } from './Search';
import SearchResultsList, { ListItem } from './SearchResultsList';
import SearchTypeFilters from './SearchTypeFilters/SearchTypeFilters';

export interface ISearchResultsDropdownProps {
  groupHeaders: GroupHeader[];
  resultItems: ListItem[];
  selectedTypeFilter: string;
  onTypeFilterClick: (type: string) => void;
  renderItem: (item: ResultItem) => JSX.Element;
  onItemClick: (item: ResultItem) => void;
  selectedOptionIndex: number;
  isLoading: boolean;
}

const dropdownCss = css({
  width: '500px',
  hieght: '20vh',
  overflowY: 'auto',
  margin: 0,
  padding: '2px',
});

const SearchResultsDropdown: ForwardRefExoticComponent<
  ISearchResultsDropdownProps & RefAttributes<FixedSizeList<any[]>>
> = forwardRef<FixedSizeList<any[]>, ISearchResultsDropdownProps>(
  (
    {
      groupHeaders,
      // onItemClick,
      onTypeFilterClick,
      renderItem,
      resultItems,
      selectedTypeFilter,
      selectedOptionIndex,
      isLoading,
      onItemClick,
    }: ISearchResultsDropdownProps,
    ref
  ) => {
    const groupHeadersToShow = useMemo(
      () =>
        selectedTypeFilter === 'all'
          ? groupHeaders
          : groupHeaders.filter((header) => header.type === selectedTypeFilter),
      [selectedTypeFilter, groupHeaders]
    );

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
          isLoading={isLoading}
          groupHeaders={groupHeadersToShow}
          resultItems={resultItems}
          renderItem={renderItem}
          selectedOptionIndex={selectedOptionIndex}
          onItemClick={onItemClick}
          ref={ref}
        />
      </Box>
    );
  }
);

export default SearchResultsDropdown;
