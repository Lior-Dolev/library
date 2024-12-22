import { FC, useState } from 'react';

type GroupHeader = {
  type: string;
  primaryText: string;
  captionText?: string;
  displayCount?: boolean;
  emptyResultText?: string;
};

type ResultItem = {
  type: string;
  id: string;
};

interface ISearchProps {
  onSearch: (text: string, type?: string) => void | Promise<void>;
  defaultSelectedTypeFilter?: string;
  groupHeaders: GroupHeader[];
  resultItems: ResultItem[];
  renderItem: (item: ResultItem) => Element;
  onItemClick: (item: ResultItem) => void;
}

const Search: FC<ISearchProps> = (
  {
    //   onSearch,
    //   defaultSelectedTypeFilter,
    //   groupHeaders,
    //   resultItems,
    //   renderItem,
    //   onItemClick,
  }: ISearchProps
) => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  return <div> SEARCH</div>;
};

export default Search;
