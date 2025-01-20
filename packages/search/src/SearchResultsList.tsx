import { css } from '@emotion/react';
import { List } from '@mui/material';
import { groupBy } from 'lodash';
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  ListChildComponentProps,
  ListOnScrollProps,
  VariableSizeList,
} from 'react-window';
import { GroupHeader, ResultItem } from './Search';
import SearchResultGroupTitle from './SearchResultGroupTitle';
import NoSearchResultItem from './SearchResultItem/NoSearchResultItem';
import SearchResultsItemSkeleton from './SearchResultItem/SearchResultsItemSkeleton';
import SearchResultListStickyHeader from './SearchResultListStickyHeader';
interface ISearchResultsList {
  groupHeaders: GroupHeader[];
  resultItems: ResultItem[];
  renderItem: (
    item: ResultItem,
    selected: boolean,
    onItemClick: (item: ResultItem) => void
  ) => JSX.Element;
  selectedOptionIndex: number;
  onItemClick: (item: ResultItem) => void;
  isLoading: boolean;
}

export type Item = { type: 'item'; item: ResultItem };
export type Header = {
  type: 'header';
  header: GroupHeader;
};
export type Skeleton = { type: 'skeleton' };
export type EmptyListItem = {
  type: 'emptyListItem';
  emptyListMessage?: string;
};

export type ListItem = Item | Header | Skeleton | EmptyListItem;

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
  ISearchResultsList & RefAttributes<VariableSizeList<ListItem[]>>
> = forwardRef<VariableSizeList<ListItem[]>, ISearchResultsList>(
  (
    {
      renderItem,
      selectedOptionIndex,
      resultItems,
      groupHeaders,
      onItemClick,
      isLoading,
    },
    ref
  ) => {
    const [stickyHeader, setStickyHeader] = useState<GroupHeader | null>(
      groupHeaders[0]
    );

    console.log(resultItems);

    useEffect(() => setStickyHeader(groupHeaders[0]), [groupHeaders]);

    const resultItemsGroupedByType = useMemo(
      () =>
        Object.fromEntries(
          Object.entries(groupBy(resultItems, 'type')).filter(([type]) =>
            groupHeaders.find((header) => header.type === type)
          )
        ),
      [groupHeaders, resultItems]
    );

    const flattenedList = useMemo(
      () =>
        groupHeaders.reduce((acc, header) => {
          const headerListItem: ListItem = { type: 'header', header };
          acc.push(headerListItem);

          const itemsList: ListItem[] = resultItemsGroupedByType[
            header.type
          ]?.map((item: ResultItem) => {
            return { type: 'item', item };
          });

          if (itemsList?.length) {
            acc.push(...itemsList);
          } else if (!isLoading) {
            acc.push({
              type: 'emptyListItem',
              emptyListMessage: header.emptyResultText,
            });
          }

          if (isLoading) {
            acc.push(
              ...([{ type: 'skeleton' }, { type: 'skeleton' }] as ListItem[])
            );
          }

          return acc;
        }, [] as ListItem[]),
      [groupHeaders, isLoading, resultItemsGroupedByType]
    );

    console.log('flattenedList', flattenedList);
    console.log('islOAD', isLoading);

    const handleScroll = useCallback(
      ({ scrollOffset }: ListOnScrollProps) => {
        let currentStickyHeader: GroupHeader | null = null;

        flattenedList.forEach((item, index) => {
          if (item.type === 'header') {
            const itemTop = index * ITEM_HEIGHT;
            if (scrollOffset >= itemTop) {
              currentStickyHeader = item.header;
            }
          }
        });

        setStickyHeader(currentStickyHeader);
      },
      [flattenedList]
    );

    const renderRow = useCallback(
      ({ index, style }: ListChildComponentProps<ListItem[]>) => {
        const listItem = flattenedList[index];

        if (listItem.type === 'header') {
          if (listItem.header.type === stickyHeader?.type) return;

          return (
            <div style={{ ...style }}>
              <SearchResultGroupTitle
                primaryText={listItem.header.primaryText}
                captionText={listItem.header.captionText}
                count={
                  listItem.header.displayCount
                    ? resultItemsGroupedByType[listItem.header.type]?.length
                    : undefined
                }
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

        if (listItem.type === 'emptyListItem') {
          return (
            <div style={{ ...style }}>
              <NoSearchResultItem message={listItem.emptyListMessage} />
            </div>
          );
        }

        return null;
      },
      [
        flattenedList,
        onItemClick,
        renderItem,
        resultItemsGroupedByType,
        selectedOptionIndex,
        stickyHeader?.type,
      ]
    );
    const isResultListEmpty = useMemo(
      () =>
        !Object.values(resultItemsGroupedByType).flat().length && !isLoading,
      [isLoading, resultItemsGroupedByType]
    );

    const calculateRowHeight = useCallback(
      (index: number) => {
        const listItem = flattenedList[index];
        if (
          listItem.type === 'header' &&
          listItem.header.type === stickyHeader?.type
        )
          return 0;

        return ITEM_HEIGHT;
      },
      [flattenedList, stickyHeader?.type]
    );

    return (
      <List css={listCSS}>
        {!isResultListEmpty ? (
          <>
            {stickyHeader && (
              <SearchResultListStickyHeader
                header={stickyHeader}
                itemsCount={resultItemsGroupedByType[stickyHeader.type]?.length}
              />
            )}
            <VariableSizeList
              height={250}
              itemCount={flattenedList.length}
              itemSize={calculateRowHeight}
              width="100%"
              itemData={flattenedList}
              ref={ref}
              onScroll={handleScroll}
            >
              {renderRow}
            </VariableSizeList>
          </>
        ) : (
          <NoSearchResultItem />
        )}
      </List>
    );
  }
);

export default SearchResultsList;
