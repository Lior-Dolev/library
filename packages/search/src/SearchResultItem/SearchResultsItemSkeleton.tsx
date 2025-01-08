import { css } from '@emotion/react';
import { Skeleton } from '@mui/material';
import { FC } from 'react';

interface ISearchResultsItemSkeletonProps {}

const skeletonResultItemSkeletonCss = css({
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  gap: '1ch',
});

const textSkeletonsCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
});

const SearchResultsItemSkeleton: FC<ISearchResultsItemSkeletonProps> = () => {
  return (
    <div css={skeletonResultItemSkeletonCss}>
      <Skeleton variant="circular" width={40} height={40} />
      <div css={textSkeletonsCss}>
        <Skeleton variant="text" width={150} height={15} />
        <Skeleton variant="text" width={90} height={15} />
      </div>
    </div>
  );
};

export default SearchResultsItemSkeleton;