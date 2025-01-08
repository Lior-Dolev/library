import { ListItem } from '@mui/material';

import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useCallback,
} from 'react';
import { GroupHeader, ResultItem } from './Search';
import SearchResultGroupTitle from './SearchResultGroupTitle';

import { FixedSizeList, ListChildComponentProps } from 'react-window';

interface ISearchResultsList {
  groupHeaders: GroupHeader[];
  resultItems: ListItem[];
  renderItem: (item: ResultItem) => JSX.Element;
  selectedOptionIndex: number;
  isLoading: boolean;
  onItemClick: (item: ResultItem) => void;
}

export type ListItem =
  | {
      type: 'header';
      header: GroupHeader;
    }
  | { type: 'item'; item: ResultItem };

const ITEM_HEIGHT = 50;

const SearchResultsList: ForwardRefExoticComponent<
  ISearchResultsList & RefAttributes<FixedSizeList<ListItem[]>>
> = forwardRef<FixedSizeList<ListItem[]>, ISearchResultsList>(
  (
    { renderItem, selectedOptionIndex, resultItems, isLoading, onItemClick },
    ref
  ) => {
    const Row = useCallback(
      ({ index, style }: ListChildComponentProps<ListItem[]>) => {
        const listItem = resultItems[index];

        if (listItem.type === 'header') {
          return (
            <div style={{ ...style }}>
              <SearchResultGroupTitle
                primaryText={listItem.header.primaryText}
                captionText={listItem.header.captionText}
              />
            </div>
          );
        }

        if (listItem.type === 'item') {
          const isSelected = selectedOptionIndex === index;
          return (
            <div
              style={{
                ...style,
                background: isSelected ? 'yellow' : 'transparent',
              }}
              onClick={() => onItemClick(listItem.item)}
            >
              {renderItem(listItem.item)}
            </div>
          );
        }

        return null;
      },
      [onItemClick, renderItem, resultItems, selectedOptionIndex]
    );
    console.log('flattendList.length: ', resultItems.length);

    return (
      <FixedSizeList
        height={300}
        itemCount={resultItems.length}
        itemSize={ITEM_HEIGHT}
        width="100%"
        itemData={resultItems}
        ref={ref}
      >
        {Row}
      </FixedSizeList>
    );
  }
);

export default SearchResultsList;
