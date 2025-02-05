import { ListItem, ListItemProps } from '@mui/material';
import { FC } from 'react';
import { css } from '@emotion/react';

interface ISearchResultListItemBaseProps extends ListItemProps {
  disabled?: boolean;
  selected?: boolean;
}

const resultItemBaseCSS = css({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  padding: '8px 16px',
  gap: '16px',
  cursor: 'pointer',
  textAlign: 'right',
  height: 40,
  boxSizing: 'border-box',

  '&:hover': {
    backgroundColor: '#30363d',
  },
});

const selectedItemCSS = css({
  backgroundColor: '#3f444a',
  borderRight: '2px solid #0366d6',
  paddingRight: '12px',
});

const disabledItemCSS = css({
  cursor: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const SearchResultListItemBase: FC<ISearchResultListItemBaseProps> = ({
  disabled,
  selected,
  ...rest
}) => {
  return (
    <ListItem
      css={[
        resultItemBaseCSS,
        selected && selectedItemCSS,
        disabled && disabledItemCSS,
      ]}
      {...rest}
    />
  );
};

export default SearchResultListItemBase;
