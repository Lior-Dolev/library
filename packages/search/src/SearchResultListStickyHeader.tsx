import { FC } from 'react';
import { GroupHeader } from './Search';
import SearchResultGroupTitle from './SearchResultGroupTitle';

interface ISearchResultListStickyHeaderProps {
  header: GroupHeader;
  itemsCount: number;
}

const SearchResultListStickyHeader: FC<ISearchResultListStickyHeaderProps> = ({
  header,
  itemsCount,
}) => (
  <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
    <SearchResultGroupTitle
      primaryText={header.primaryText}
      captionText={header.captionText}
      count={header.displayCount ? itemsCount : undefined}
    />
  </div>
);

export default SearchResultListStickyHeader;
