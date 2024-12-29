import { debounce, InputAdornment, TextField } from '@mui/material';
import { FC, useCallback, useRef, useState, type KeyboardEvent } from 'react';
import SearchIcon from './SearchIcon';
import { css } from '@emotion/react';
interface ISearchBoxProps {
  onClick: () => void;
  onSearch: (text: string) => void | Promise<void>;
  isSearching: boolean;
  searchDebounceMS?: number;
  placeholder?: string;
  onEscape: () => void;
  onKeyDownCapture?: (event: KeyboardEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
}

const inputBaseCss = css({
  width: '300px',
  transition: 'width 0.3s ease-in-out', // Smooth transition
  ':focus-within': {
    width: '500px', // Target the focus-within state of the container
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
  onClick,
  onKeyDown,
  onKeyDownCapture,
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
    onKeyDown?.(event);
    if (event.key === 'Escape') {
      setSearchInput('');
      onEscape();
      inputRef.current?.blur();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <TextField
        onClick={onClick}
        css={inputBaseCss}
        inputRef={inputRef}
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyDownCapture={onKeyDownCapture}
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
