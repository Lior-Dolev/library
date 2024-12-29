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
import SearchResultsList from './SearchResultsList';
import SearchTypeFilters from './SearchTypeFilters/SearchTypeFilters';

export interface ISearchResultsDropdownProps {
  groupHeaders: GroupHeader[];
  resultItems: ResultItem[];
  selectedTypeFilter: string;
  onTypeFilterClick: (type: string) => void;
  renderItem: (item: ResultItem) => JSX.Element;
  onItemClick: (item: ResultItem) => void;
}

const dropdownCss = css({
  width: '500px',
  hieght: '20vh',
  overflowY: 'auto',
  margin: 0,
  padding: '2px',
});

const SearchResultsDropdown: ForwardRefExoticComponent<
  ISearchResultsDropdownProps & RefAttributes<FixedSizeList<unknown[]>>
> = forwardRef<FixedSizeList<unknown[]>, ISearchResultsDropdownProps>(
  (
    {
      groupHeaders,
      // onItemClick,
      onTypeFilterClick,
      renderItem,
      resultItems,
      selectedTypeFilter,
    }: ISearchResultsDropdownProps
    // ref
  ) => {
    const groupHeadersToShow = useMemo(
      () =>
        selectedTypeFilter === 'all'
          ? groupHeaders
          : groupHeaders.filter((header) => header.type === selectedTypeFilter),
      [selectedTypeFilter, groupHeaders]
    );

    // const resultItemsGroupedByType = useMemo(
    //   () => groupBy(resultItems, 'type'),
    //   [resultItems]
    // );

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
          groupHeaders={groupHeadersToShow}
          resultItems={resultItems}
          renderItem={renderItem}
        />
      </Box>
    );
  }
);

export default SearchResultsDropdown;
