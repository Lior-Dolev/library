import { FC } from 'react';
import SearchResultListItemBase from './SearchResultListItemBase';

const NoSearchResultItem: FC = () => (
  <SearchResultListItemBase disabled>
    לא נמצאו תוצאות מתאימות
  </SearchResultListItemBase>
);

export default NoSearchResultItem;
