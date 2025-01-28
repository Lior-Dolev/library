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
  isOpen: boolean;
  onItemClick: (item: ResultItem) => void;
}

const dropdownCSS = (isOpen: boolean) =>
  css({
    background: '#0c1117',
    width: '500px',
    overflowY: 'auto',
    margin: 0,
    padding: '2px',
    transition: 'height 0.3s ease-in-out',
    height: isOpen ? '365px' : '0px',
    visibility: isOpen ? 'visible' : 'hidden',
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
      isOpen,
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
      <Box css={dropdownCSS(isOpen)}>
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
