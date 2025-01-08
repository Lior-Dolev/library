import {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { FixedSizeList } from 'react-window';
import SearchBox from './SearchBox';
import SearchResultsDropdown from './SearchResultsDropdown';
import { ListItem } from './SearchResultsList';
import groupBy from 'lodash/groupBy';

export type GroupHeader = {
  type: string;
  primaryText: string;
  captionText?: string;
  displayCount?: boolean;
  emptyResultText?: string;
};

export type ResultItem = {
  type: string;
  id: string;
  displayText: string;
  [key: string]: unknown;
};

interface ISearchProps {
  onSearch: (text: string, type?: string) => void | Promise<void>;
  defaultSelectedTypeFilter?: string;
  groupHeaders: GroupHeader[];
  resultItems: ResultItem[];
  renderItem: (item: ResultItem) => JSX.Element;
  onItemClick: (item: ResultItem) => void;
  isLoading: boolean;
}

const Search: FC<ISearchProps> = ({
  onSearch: onSearchProp,
  defaultSelectedTypeFilter = 'all',
  groupHeaders,
  resultItems,
  renderItem,
  onItemClick,
  isLoading: isSearching,
}: ISearchProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>(
    defaultSelectedTypeFilter
  );
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<FixedSizeList<ListItem[]>>(null);

  const handleSearchChange = useCallback(
    async (value: string) => {
      if (typeof value !== 'string') return;
      const trimmedValue = value.trim();

      if (searchText === trimmedValue) return;

      setSearchText(trimmedValue);
      await onSearchProp(trimmedValue, selectedTypeFilter);
    },
    [searchText, onSearchProp, selectedTypeFilter]
  );

  const handleTypeFilterChange = useCallback((typeId: string) => {
    setSelectedTypeFilter(typeId);
    setSelectedOptionIndex(0);
  }, []);

  const openList = useCallback((): void => {
    setIsListOpen(true);
  }, []);

  const closeList = useCallback((): void => {
    setIsListOpen(false);
  }, []);

  const groupedByTypeLists = useMemo(
    () => groupBy(resultItems, 'type'),
    [resultItems]
  );
  const groupHeadersToShow = useMemo(
    () =>
      selectedTypeFilter === 'all'
        ? groupHeaders
        : groupHeaders.filter((header) => header.type === selectedTypeFilter),
    [selectedTypeFilter, groupHeaders]
  );
  const flattendList: ListItem[] = useMemo(
    () =>
      groupHeadersToShow?.flatMap((header) => {
        const headerItem: ListItem = { type: 'header', header };
        const listItems: ListItem[] = groupedByTypeLists[header.type]?.map(
          (item) => ({ type: 'item', item })
        );

        return [headerItem, ...(listItems ?? [])];
      }),
    [groupHeadersToShow, groupedByTypeLists]
  );

  useEffect(() => {
    setSelectedOptionIndex(0);
  }, [isListOpen]);

  useEffect(() => {
    listRef.current?.scrollToItem(selectedOptionIndex);
  }, [selectedOptionIndex]);

  const onMoveUp = useCallback(() => {
    setSelectedOptionIndex((prev) =>
      prev > 0 ? prev - 1 : flattendList.length - 1
    );
  }, [flattendList.length]);

  const onMoveDown = useCallback(() => {
    setSelectedOptionIndex((prev) =>
      prev < flattendList.length - 1 ? prev + 1 : 0
    );
  }, [flattendList.length]);

  const onKeyDownCapture = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowUp') {
        onMoveUp();
        console.log('selected index: ', selectedOptionIndex);

        return;
      }

      if (event.key === 'ArrowDown') {
        onMoveDown();
        console.log('selected index: ', selectedOptionIndex);

        return;
      }
    },
    [onMoveDown, onMoveUp, selectedOptionIndex]
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        gap: '5px',
      }}
      ref={wrapperRef}
    >
      <SearchBox
        onClick={openList}
        onSearch={handleSearchChange}
        isSearching={isSearching}
        onEscape={closeList}
        onKeyDownCapture={onKeyDownCapture}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          if (!(event.key === 'Enter' && resultItems.length > 0)) return;

          const selectedOption = resultItems[selectedOptionIndex];
          (document.activeElement as HTMLElement).blur();
          closeList();
          handleSearchChange(selectedOption.displayText);
        }}
      />
      {isListOpen && (
        <SearchResultsDropdown
          groupHeaders={groupHeaders}
          onItemClick={onItemClick}
          onTypeFilterClick={handleTypeFilterChange}
          renderItem={renderItem}
          resultItems={flattendList}
          selectedTypeFilter={selectedTypeFilter}
          ref={listRef}
          selectedOptionIndex={selectedOptionIndex}
          isLoading={isSearching}
        />
      )}
    </div>
  );
};

export default Search;
