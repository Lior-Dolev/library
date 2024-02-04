import { styled } from '@mui/material';
import CaptionDivider from './CaptionDivider';
import { Children, FC, ReactNode, isValidElement } from 'react';

const CaptionListWrapper = styled(`div`)({
  display: 'flex',
  gap: '1em',
});

export interface CaptionListProps {
  children: ReactNode;
}

const CaptionList: FC<CaptionListProps> = ({ children }: CaptionListProps) => (
  <CaptionListWrapper>
    {Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        if (index !== Children.count(children) - 1) {
          return (
            <>
              {child}
              <CaptionDivider />
            </>
          );
        }

        return child;
      }

      return child;
    })}
  </CaptionListWrapper>
);

export default CaptionList;
