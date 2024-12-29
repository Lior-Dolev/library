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
}

const Search: FC<ISearchProps> = ({
  onSearch: onSearchProp,
  defaultSelectedTypeFilter = 'all',
  groupHeaders,
  resultItems,
  renderItem,
  onItemClick,
}: ISearchProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<FixedSizeList<unknown[]>>(null);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>(
    defaultSelectedTypeFilter
  );
  const [searchText, setSearchText] = useState<string>('');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

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
      console.log(event);

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

  const onSearch = useCallback(
    (value: string) => {
      if (typeof value !== 'string') return;

      const trimmedValue = value.trim();

      if (searchText === trimmedValue) return;

      setSearchText(trimmedValue);
      onSearchProp(trimmedValue, selectedTypeFilter);
    },
    [searchText, onSearchProp, selectedTypeFilter]
  );

  const openList = (): void => {
    setIsListOpen(true);
  };

  const closeList = (): void => {
    setIsListOpen(false);
  };

  const onTypeFilterClick = useCallback((typeId: string) => {
    setSelectedTypeFilter(typeId);
  }, []);

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
        onSearch={onSearch}
        isSearching={false}
        onEscape={closeList}
        onKeyDownCapture={onKeyDownCapture}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          if (!(event.key === 'Enter' && resultItems.length > 0)) return;

          const selectedOption = resultItems[selectedOptionIndex];
          (document.activeElement as HTMLElement).blur();
          closeList();
          onSearch(selectedOption.displayText);
        }}
      />
      {isListOpen && (
        <SearchResultsDropdown
          groupHeaders={groupHeaders}
          onItemClick={onItemClick}
          onTypeFilterClick={onTypeFilterClick}
          renderItem={renderItem}
          resultItems={resultItems}
          selectedTypeFilter={selectedTypeFilter}
          ref={listRef}
        />
      )}
    </div>
  );
};

export default Search;
