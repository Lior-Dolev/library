import React, { FC, useCallback } from 'react';
import SearchResultItemMain from './SearchResultItemMain';
import SearchResultListItemBase from './SearchResultListItemBase';
import { ResultItem } from '../Search';

interface SearchResultsItemProps {
  key: string;
  title: string;
  titleCaption?: string;
  icon: React.ReactNode;
  disabled?: boolean;
  selected: boolean;
  onSelect: (value: ResultItem) => void;
  data: ResultItem;
}

const SearchResultsItem: FC<SearchResultsItemProps> = ({
  title,
  titleCaption,
  icon,
  selected,
  onSelect,
  data,
}) => {
  const onClick = useCallback(() => {
    onSelect(data);
  }, [data, onSelect]);

  return (
    <SearchResultListItemBase selected={selected} onClick={onClick}>
      <SearchResultItemMain title={title} titleCaption={titleCaption} />

      {icon}
    </SearchResultListItemBase>
  );
};

export default SearchResultsItem;
