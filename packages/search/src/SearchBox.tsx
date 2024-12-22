import { FC } from 'react';

interface ISearchBoxProps {
  onSearch: (text: string) => void | Promise<void>;
  isSearching: boolean;
  searchDebounceMS?: number;
  placeHolder?: string;
  onEscape: () => void;
}
const SearchBox: FC<ISearchBoxProps> = (
  {
    //   onEscape,
    //   isSearching,
    //   searchDebounceMS,
    //   placeHolder,
    //   onSearch,
  }
) => {
  return <div>SearchBox</div>;
};

export default SearchBox;
