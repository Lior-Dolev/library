import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useCallback,
  useMemo,
} from 'react';
import { GroupHeader, ResultItem } from './Search';
import SearchResultGroupTitle from './SearchResultGroupTitle';

import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { List } from '@mui/material';
import NoSearchResultItem from './SearchResultItem/NoSearchResultItem';
import SearchResultsItemSkeleton from './SearchResultItem/SearchResultsItemSkeleton';
import { css } from '@emotion/react';
interface ISearchResultsList {
  groupHeaders: GroupHeader[];
  resultItems: ListItem[];
  renderItem: (
    item: ResultItem,
    selected: boolean,
    onItemClick: (item: ResultItem) => void
  ) => JSX.Element;
  selectedOptionIndex: number;
  onItemClick: (item: ResultItem) => void;
}

export type Item = { type: 'item'; item: ResultItem };
export type Header = {
  type: 'header';
  header: GroupHeader;
};
export type Skeleton = { type: 'skeleton' };

export type ListItem = Item | Header | Skeleton;

const ITEM_HEIGHT = 50;

const listCSS = css({
  '& ::-webkit-scrollbar-thumb:hover': { backgroundColor: '#767676' },
  '& ::-webkit-scrollbar-thumb': {
    backgroundColor: '#878787',
    borderRadius: 10,
  },
  '& ::-webkit-scrollbar': {
    width: 5,
  },
});

const SearchResultsList: ForwardRefExoticComponent<
  ISearchResultsList & RefAttributes<FixedSizeList<ListItem[]>>
> = forwardRef<FixedSizeList<ListItem[]>, ISearchResultsList>(
  (
    { renderItem, selectedOptionIndex, resultItems, groupHeaders, onItemClick },
    ref
  ) => {
    const ListRow = useCallback(
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
              }}
            >
              {renderItem(listItem.item, isSelected, onItemClick)}
            </div>
          );
        }

        if (listItem.type === 'skeleton') {
          return (
            <div style={{ ...style }}>
              <SearchResultsItemSkeleton />
            </div>
          );
        }

        return null;
      },
      [onItemClick, renderItem, resultItems, selectedOptionIndex]
    );
    const isResultListNotEmpty = useMemo(
      () => !!(resultItems.length - groupHeaders.length),
      [groupHeaders.length, resultItems.length]
    );

    return (
      <List css={listCSS}>
        {isResultListNotEmpty ? (
          <FixedSizeList
            height={300}
            itemCount={resultItems.length}
            itemSize={ITEM_HEIGHT}
            width="100%"
            itemData={resultItems}
            ref={ref}
          >
            {ListRow}
          </FixedSizeList>
        ) : (
          <NoSearchResultItem />
        )}
      </List>
    );
  }
);

export default SearchResultsList;
