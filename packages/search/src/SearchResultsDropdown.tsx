import { Box } from '@mui/material';
import groupBy from 'lodash/groupBy';
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

const SearchResultsDropdown: ForwardRefExoticComponent<
  ISearchResultsDropdownProps & RefAttributes<FixedSizeList<any[]>>
> = forwardRef<FixedSizeList<any[]>, ISearchResultsDropdownProps>(
  (
    {
      groupHeaders,
      onItemClick,
      onTypeFilterClick,
      renderItem,
      resultItems,
      selectedTypeFilter,
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

    const resultItemsGroupedByType = useMemo(
      () => groupBy(resultItems, 'type'),
      [resultItems]
    );

    return (
      <Box
        // ref={listRef}
        sx={{
          width: '40em',
          // backgroundColor: '#fff',
          // border: '1px solid #e0e0e0',
          // borderRadius: '8px',
          // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          // padding: '16px',
          // overflowY: 'auto',
          // maxHeight: '50vh',
        }}
      >
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
// ({
//  ({ groupHeaders,
//   resultItems,
//   selectedTypeFilter,
//   onTypeFilterClick,
//   renderItem,
//   onItemClick,}:SearchResultsDropdownProps,ref)
// }) => {
// //   const listRef = useRef<HTMLDivElement>(null);

//   const groupHeadersToShow = useMemo(
//     () =>
//       selectedTypeFilter === 'all'
//         ? groupHeaders
//         : groupHeaders.filter((header) => header.type === selectedTypeFilter),
//     [selectedTypeFilter, groupHeaders]
//   );

//   const resultItemsGroupedByType = useMemo(
//     () => groupBy(resultItems, 'type'),
//     [resultItems]
//   );

//   return (
//     <Box
//       ref={listRef}
//       sx={{
//         width: '40em',
//         // backgroundColor: '#fff',
//         // border: '1px solid #e0e0e0',
//         // borderRadius: '8px',
//         // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         // padding: '16px',
//         // overflowY: 'auto',
//         // maxHeight: '50vh',
//       }}
//     >
//       {/* Type Filters */}
//       <SearchTypeFilters
//         values={groupHeaders.map(({ primaryText, type }) => ({
//           label: primaryText,
//           type,
//         }))}
//         selected={selectedTypeFilter}
//         onSelect={onTypeFilterClick}
//       />

//       {/* Results List */}
//       <SearchResultsList
//         groupHeaders={groupHeadersToShow}
//         resultItems={resultItems}
//         renderItem={renderItem}
//       />
//     </Box>
//   );
// };

export default SearchResultsDropdown;
