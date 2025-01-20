import { keyframes } from '@emotion/react';
import { Search } from '@mui/icons-material';
import { FC } from 'react';
interface ISearchIcon {
  isSearching: boolean;
}

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SearchIcon: FC<ISearchIcon> = ({ isSearching }) => {
  return (
    <Search
      sx={{
        animation: isSearching
          ? `${rotateAnimation} 2s linear infinite`
          : 'none',
      }}
    />
  );
};

export default SearchIcon;
