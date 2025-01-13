import {
  FC,
  ReactNode,
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
import { Item, ListItem } from './SearchResultsList';

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
  description?: string;
  icon?: ReactNode;
  [key: string]: unknown;
};

interface ISearchProps {
  onSearch: (text: string, type?: string) => void | Promise<void>;
  defaultSelectedTypeFilter?: string;
  groupHeaders: GroupHeader[];
  resultItems: ResultItem[];
  renderItem: (
    item: ResultItem,
    selected: boolean,
    onItemClick: (item: ResultItem) => void
  ) => JSX.Element;
  onItemClick: (item: ResultItem) => void;
  isLoading: boolean;
}

const Search: FC<ISearchProps> = ({
  onSearch: onSearchProp,
  defaultSelectedTypeFilter = 'all',
  groupHeaders,
  resultItems,
  renderItem,
  onItemClick: onItemClickProp,
  isLoading: isSearching,
}: ISearchProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>(
    defaultSelectedTypeFilter
  );
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

  const [isFocused, setIsFocused] = useState<boolean>(false);
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

  const focusSearch = useCallback((): void => {
    setIsFocused(true);
  }, []);

  const unfocusSearch = useCallback((): void => {
    setIsFocused(false);
  }, []);

  const onItemClick = useCallback(
    (item: ResultItem) => {
      onItemClickProp(item);
      unfocusSearch();
    },
    [onItemClickProp, unfocusSearch]
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
      groupHeadersToShow.reduce((acc, header) => {
        const headerItem: ListItem = { type: 'header', header };
        const items: ListItem[] = resultItems
          .filter((item) => item.type === header.type)
          .map((item) => ({ type: 'item', item }));
        acc.push(...[headerItem, ...items]);

        if (isSearching) {
          acc.push({ type: 'skeleton' });
          acc.push({ type: 'skeleton' });
        }

        return acc;
      }, [] as ListItem[]),
    [groupHeadersToShow, isSearching, resultItems]
  );

  useEffect(() => {
    setSelectedOptionIndex(0);
  }, [isFocused]);

  useEffect(() => {
    listRef.current?.scrollToItem(selectedOptionIndex);
  }, [selectedOptionIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        unfocusSearch();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [unfocusSearch]);

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
        return;
      }

      if (event.key === 'ArrowDown') {
        onMoveDown();
        return;
      }
    },
    [onMoveDown, onMoveUp]
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        gap: '5px',
        width: '500px',
      }}
      ref={wrapperRef}
    >
      <SearchBox
        onClick={focusSearch}
        onSearch={handleSearchChange}
        isSearching={isSearching}
        isFocused={isFocused}
        onEscape={unfocusSearch}
        onKeyDownCapture={onKeyDownCapture}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          if (!(event.key === 'Enter' && resultItems.length > 0)) return;

          const selectedItem = resultItems.find(
            (item) =>
              item.id === (flattendList[selectedOptionIndex] as Item).item.id
          );
          (document.activeElement as HTMLElement).blur();

          onItemClick(selectedItem!);
        }}
      />
      {isFocused && (
        <SearchResultsDropdown
          groupHeaders={groupHeaders}
          onTypeFilterClick={handleTypeFilterChange}
          renderItem={renderItem}
          resultItems={flattendList}
          selectedTypeFilter={selectedTypeFilter}
          ref={listRef}
          selectedOptionIndex={selectedOptionIndex}
          isLoading={isSearching}
          onItemClick={onItemClick}
        />
      )}
    </div>
  );
};

export default Search;
