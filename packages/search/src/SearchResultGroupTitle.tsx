import { css } from '@emotion/react';
import { Divider, Typography } from '@mui/material';
import { FC } from 'react';

interface ISearchResultGroupTitleProps {
  primaryText: string;
  captionText?: string;
  count?: number;
}

const searchResultGroupTitleContainerCss = css({
  display: 'flex',
  alignItems: 'baseline',
  flexDirection: 'row-reverse',
});

const SearchResultGroupTitle: FC<ISearchResultGroupTitleProps> = ({
  primaryText,
  captionText,
  count,
}) => {
  return (
    <div>
      <Divider sx={{ background: 'white' }} />
      <div css={searchResultGroupTitleContainerCss}>
        <Typography variant="h5" fontWeight={'bold'}>
          {primaryText}
        </Typography>
        {count && <Typography>{`(${count})`}</Typography>}
        {captionText && (
          <Typography
            mr={'1ch'}
            variant="body2"
          >{`*${captionText}`}</Typography>
        )}
      </div>
    </div>
  );
};

export default SearchResultGroupTitle;
