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

interface ISearchResultsList {
  groupHeaders: GroupHeader[];
  resultItems: ResultItem[];
  renderItem: (item: ResultItem) => JSX.Element;
}

const SearchResultsList: ForwardRefExoticComponent<
  ISearchResultsList & RefAttributes<HTMLDataListElement>
> = forwardRef<HTMLDataListElement, ISearchResultsList>(
  ({ groupHeaders, renderItem, resultItems }, ref) => {
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
            {groupedByTypeLists[type]?.map(renderItem)}
          </>
        ))}
      </List>
    );
  }
);

export default SearchResultsList;
