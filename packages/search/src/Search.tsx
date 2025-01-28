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
import { VariableSizeList } from 'react-window';
import SearchBox from './SearchBox';
import SearchResultsDropdown from './SearchResultsDropdown';
import { ListItem } from './SearchResultsList';

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

const isResultListItem = (item: GroupHeader | ResultItem): item is ResultItem =>
  'id' in item;

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
  const listRef = useRef<VariableSizeList<ListItem[]>>(null);

  const onSearch = useCallback(
    async (value: string) => {
      if (typeof value !== 'string') return;
      const trimmedValue = value.trim();

      if (searchText === trimmedValue) return;

      setSearchText(trimmedValue);
      await onSearchProp(trimmedValue, selectedTypeFilter);
    },
    [searchText, onSearchProp, selectedTypeFilter]
  );

  const onTypeFilterChange = useCallback((typeId: string) => {
    setSelectedTypeFilter(typeId);
    setSelectedOptionIndex(0);
  }, []);

  const focusSearch = useCallback((): void => {
    setIsFocused(true);
  }, []);

  const unfocusSearch = useCallback((): void => {
    setIsFocused(false);
    setSearchText('');
    onSearchProp('');
  }, [onSearchProp]);

  const onItemClick = useCallback(
    (item: ResultItem) => {
      onItemClickProp(item);
      unfocusSearch();
    },
    [onItemClickProp, unfocusSearch]
  );

  const headersAndItemsList = useMemo(() => {
    const filteredHeaders =
      selectedTypeFilter === 'all'
        ? groupHeaders
        : groupHeaders.filter((header) => selectedTypeFilter === header.type);

    return filteredHeaders.reduce(
      (acc, header) => {
        acc.push(header);
        acc.push(...resultItems.filter((item) => item.type === header.type));

        return acc;
      },
      [] as (GroupHeader | ResultItem)[]
    );
  }, [groupHeaders, resultItems, selectedTypeFilter]);

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

  const findNextSelectableIndex = useCallback(
    (currentIndex: number, direction: 1 | -1) => {
      let newIndex = currentIndex + direction;

      if (newIndex < 0) {
        newIndex = headersAndItemsList.length - 1;
      } else if (newIndex >= headersAndItemsList.length) {
        newIndex = 0;
      }

      while (!isResultListItem(headersAndItemsList[newIndex])) {
        newIndex += direction;

        if (newIndex < 0) {
          newIndex = headersAndItemsList.length - 1;
        } else if (newIndex >= headersAndItemsList.length) {
          newIndex = 0;
        }
        if (newIndex === currentIndex) break;
      }

      return newIndex;
    },
    [headersAndItemsList]
  );

  const onMoveUp = useCallback(() => {
    setSelectedOptionIndex((prev) => findNextSelectableIndex(prev, -1));
  }, [findNextSelectableIndex]);

  const onMoveDown = useCallback(() => {
    setSelectedOptionIndex((prev) => findNextSelectableIndex(prev, 1));
  }, [findNextSelectableIndex]);

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
        searchText={searchText}
        onClick={focusSearch}
        onSearch={onSearch}
        isSearching={isSearching}
        isFocused={isFocused}
        onEscape={unfocusSearch}
        onKeyDownCapture={onKeyDownCapture}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          if (!(event.key === 'Enter' && resultItems.length > 0)) return;

          const selectedItem = resultItems.find(
            (item) =>
              item.id ===
              (headersAndItemsList[selectedOptionIndex] as ResultItem).id
          );
          (document.activeElement as HTMLElement).blur();

          setSearchText('');
          onSearch('');
          onItemClick(selectedItem!);
        }}
      />
      <SearchResultsDropdown
        groupHeaders={groupHeaders}
        onTypeFilterClick={onTypeFilterChange}
        renderItem={renderItem}
        resultItems={resultItems}
        selectedTypeFilter={selectedTypeFilter}
        ref={listRef}
        selectedOptionIndex={selectedOptionIndex}
        isLoading={isSearching}
        isOpen={isFocused}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default Search;
