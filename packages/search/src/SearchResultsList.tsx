import { List } from '@mui/material';
import groupBy from 'lodash/groupBy';
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useMemo,
} from 'react';
import { GroupHeader, ResultItem } from './Search';
import SearchResultGroupTitle from './SearchResultGroupTitle';
import SearchResultsItemSkeleton from './SearchResultItem/SearchResultsItemSkeleton';

interface ISearchResultsList {
  groupHeaders: GroupHeader[];
  resultItems: ResultItem[];
  renderItem: (item: ResultItem) => JSX.Element;
  selectedOptionIndex: number;
  isLoading: boolean;
}

const SearchResultsList: ForwardRefExoticComponent<
  ISearchResultsList & RefAttributes<HTMLDataListElement>
> = forwardRef<HTMLDataListElement, ISearchResultsList>(
  (
    { groupHeaders, renderItem, selectedOptionIndex, resultItems, isLoading },
    ref
  ) => {
    const groupedByTypeLists = useMemo(
      () => groupBy(resultItems, 'type'),
      [resultItems]
    );

    return (
      <List>
        {groupHeaders.map(({ primaryText, type, captionText }) => (
          <>
            <SearchResultGroupTitle
              primaryText={primaryText}
              captionText={captionText}
              key={type}
            />
            {isLoading ? (
              <>
                <SearchResultsItemSkeleton />
                <SearchResultsItemSkeleton />
              </>
            ) : (
              groupedByTypeLists[type]?.map((item, index) => (
                <div>
                  {renderItem({
                    ...item,
                    selected: index === selectedOptionIndex,
                  })}
                </div>
              ))
            )}
          </>
        ))}
      </List>
    );
  }
);

export default SearchResultsList;
