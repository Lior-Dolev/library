import { FC, ReactNode } from 'react';

interface ISearchResultsItemProps {
  key: string;
  title: string;
  titleCaption?: string;
  icon: ReactNode;
}

const SearchResultsItem: FC<ISearchResultsItemProps> = ({}) => {
  return <div>SearchResultsItem</div>;
};

export default SearchResultsItem;
