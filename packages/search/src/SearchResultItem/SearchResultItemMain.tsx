import { css } from '@emotion/react';
import { Box, Tooltip, Typography } from '@mui/material';
import { FC } from 'react';

interface ISearchResultItemMainProps {
  title: string;
  titleCaption?: string;
}

const textCSS = css({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const SearchResultItemMain: FC<ISearchResultItemMainProps> = ({
  title,
  titleCaption,
}) => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Tooltip title={title} placement="top" followCursor arrow>
        <Typography variant="h6" css={textCSS}>
          {title}
        </Typography>
      </Tooltip>

      {titleCaption && (
        <Tooltip title={titleCaption} placement="top" followCursor arrow>
          <Typography variant="body2" css={textCSS}>
            {titleCaption}
          </Typography>
        </Tooltip>
      )}
    </Box>
  );
};

export default SearchResultItemMain;
