import { debounce, InputAdornment, TextField } from '@mui/material';
import { FC, useCallback, useRef, useState } from 'react';
import SearchIcon from './SearchIcon';
import { css } from '@emotion/react';
interface ISearchBoxProps {
  onSearch: (text: string) => void | Promise<void>;
  isSearching: boolean;
  searchDebounceMS?: number;
  placeholder?: string;
  onEscape: () => void;
}

const inputBaseCss = css({
  width: '10em',
  transition: 'width 0.3s ease-in-out', // Smooth transition
  ':focus-within': {
    width: '20em', // Target the focus-within state of the container
  },
  '& .MuiInputBase-input': {
    textAlign: 'right', // Align text inside the input
  },
});
const SearchBox: FC<ISearchBoxProps> = ({
  onEscape,
  isSearching,
  searchDebounceMS = 300,
  placeholder = 'חיפוש',
  onSearch,
}) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      const trimmedValue = value.trim();
      if (trimmedValue) {
        onSearch(trimmedValue);
      }
    }, searchDebounceMS),
    [onSearch, searchDebounceMS]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    debouncedSearch(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setSearchInput('');
      onEscape();
      inputRef.current?.blur();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <TextField
        css={inputBaseCss}
        inputRef={inputRef}
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon isSearching={isSearching} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBox;
