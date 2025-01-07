import {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { FixedSizeList } from 'react-window';
import SearchBox from './SearchBox';
import SearchResultsDropdown from './SearchResultsDropdown';

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<FixedSizeList<unknown[]>>(null);
  // const lRef = useRef<HTMLDivElement>(null);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>(
    defaultSelectedTypeFilter
  );
  const [searchText, setSearchText] = useState<string>('');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

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
  }, []);

  const openList = useCallback((): void => {
    setIsListOpen(true);
  }, []);

  const closeList = useCallback((): void => {
    setIsListOpen(false);
  }, []);

  useEffect(() => {
    setSelectedOptionIndex(0);
  }, [isListOpen]);

  useEffect(() => {
    listRef.current?.scrollToItem(selectedOptionIndex);
  }, [selectedOptionIndex]);

  const onMoveUp = useCallback(() => {
    setSelectedOptionIndex((prev) =>
      prev > 0 ? prev - 1 : resultItems.length - 1
    );
  }, [resultItems, setSelectedOptionIndex]);

  const onMoveDown = useCallback(() => {
    setSelectedOptionIndex((prev) =>
      prev < resultItems.length - 1 ? prev + 1 : 0
    );
  }, [resultItems, setSelectedOptionIndex]);

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
          resultItems={resultItems}
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
