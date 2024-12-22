import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Tooltip from '@horus-library/tooltip';

import { css } from '@emotion/react';

interface SearchResultsItemProps {
  key: string;
  title: string;
  titleCaption?: string;
  icon: React.ReactNode;
}

const resultItemCss = css({
  display: 'grid',
  gridTemplateColumns: '1fr auto', // Text on the left, icon on the right
  alignItems: 'center',
  padding: '8px 16px',
  gap: '16px',
  cursor: 'pointer',
});

const SearchResultsItem: FC<SearchResultsItemProps> = ({
  title,
  titleCaption,
  icon,
}) => {
  return (
    <div css={resultItemCss}>
      <Box sx={{ overflow: 'hidden' }}>
        <Tooltip title={title} placement="top" followCursor arrow>
          <Typography
            variant="h6"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              //   fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
        </Tooltip>

        {/* Caption with Ellipsis */}
        {titleCaption && (
          <Tooltip title={titleCaption} placement="top" followCursor arrow>
            <Typography
              variant="body2"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                // color: 'gray',
                // fontSize: '0.9rem',
              }}
            >
              {titleCaption}
            </Typography>
          </Tooltip>
        )}
      </Box>

      {icon}
    </div>
  );
};

export default SearchResultsItem;
