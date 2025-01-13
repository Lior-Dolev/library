import { ListItem, ListItemProps } from '@mui/material';
import { FC } from 'react';
import { css } from '@emotion/react';

interface ISearchResultListItemBaseProps extends ListItemProps {
  disabled?: boolean;
  selected?: boolean;
}

const resultItemBaseCss = css({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  padding: '8px 16px',
  gap: '16px',
  cursor: 'pointer',
  textAlign: 'right',

  '&:hover': {
    backgroundColor: '#30363d',
  },
});

const selectedItemCss = css({ backgroundColor: '#3f444a' });

const disabledItemCss = css({
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
        resultItemBaseCss,
        selected && selectedItemCss,
        disabled && disabledItemCss,
      ]}
      {...rest}
    />
  );
};

export default SearchResultListItemBase;
