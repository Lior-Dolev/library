import { css } from '@emotion/react';
import { Box } from '@mui/material';
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useMemo,
} from 'react';
import { VariableSizeList } from 'react-window';
import { GroupHeader, ResultItem } from './Search';
import SearchResultsList, { ListItem } from './SearchResultsList';
import SearchTypeFilters from './SearchTypeFilters/SearchTypeFilters';

export interface ISearchResultsDropdownProps {
  groupHeaders: GroupHeader[];
  resultItems: ResultItem[];
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

const dropdownCSS = css({
  background: '#0c1117',
  width: '500px',
  overflowY: 'auto',
  margin: 0,
  padding: '2px',
});

const SearchResultsDropdown: ForwardRefExoticComponent<
  ISearchResultsDropdownProps & RefAttributes<VariableSizeList<ListItem[]>>
> = forwardRef<VariableSizeList<ListItem[]>, ISearchResultsDropdownProps>(
  (
    {
      groupHeaders,
      onTypeFilterClick,
      renderItem,
      resultItems,
      selectedTypeFilter,
      selectedOptionIndex,
      onItemClick,
      isLoading,
    }: ISearchResultsDropdownProps,
    ref
  ) => {
    const groupHeadersToShow = useMemo(
      () =>
        selectedTypeFilter === 'all'
          ? groupHeaders
          : groupHeaders.filter((header) => header.type === selectedTypeFilter),
      [groupHeaders, selectedTypeFilter]
    );

    return (
      <Box css={dropdownCSS}>
        <SearchTypeFilters
          values={groupHeaders.map(({ primaryText, type }) => ({
            label: primaryText,
            type,
          }))}
          selected={selectedTypeFilter}
          onSelect={onTypeFilterClick}
        />

        <SearchResultsList
          groupHeaders={groupHeadersToShow}
          resultItems={resultItems}
          renderItem={renderItem}
          selectedOptionIndex={selectedOptionIndex}
          ref={ref}
          onItemClick={onItemClick}
          isLoading={isLoading}
        />
      </Box>
    );
  }
);

export default SearchResultsDropdown;
