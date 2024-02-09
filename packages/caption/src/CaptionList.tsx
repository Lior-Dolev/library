import { css } from '@emotion/react';
import CaptionDivider from './CaptionDivider';
import { Children, type FC, isValidElement, type ReactNode } from 'react';

const flexClass = css`
  display: flex;
  gap: 0.5em;
`;

export interface CaptionListProps {
  children: ReactNode;
}

const CaptionList: FC<CaptionListProps> = ({ children }: CaptionListProps) => (
  <div css={flexClass}>
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
  </div>
);

export default CaptionList;
