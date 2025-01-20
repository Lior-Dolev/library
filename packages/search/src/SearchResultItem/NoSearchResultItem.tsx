import { FC } from 'react';
import SearchResultListItemBase from './SearchResultListItemBase';

interface INoSearchResultItemProps {
  message?: string;
}

const defaultMessage = 'לא נמצאו תוצאות מתאימות';
const NoSearchResultItem: FC<INoSearchResultItemProps> = ({
  message = defaultMessage,
}) => <SearchResultListItemBase disabled>{message}</SearchResultListItemBase>;

export default NoSearchResultItem;
