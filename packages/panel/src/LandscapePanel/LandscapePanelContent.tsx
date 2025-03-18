import type { FC } from 'react';
import { PanelContent, type PanelContentProps } from '../PanelContent';
import { css } from '@emotion/react';

export interface LandscapePanelContentProps extends PanelContentProps {}

const landscapePanelContentCSS = css({
  padding: 0,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1em',
});

const LandscapePanelContent: FC<LandscapePanelContentProps> = (props: LandscapePanelContentProps) => (
  <PanelContent
    css={landscapePanelContentCSS}
    {...props}
  />
);

export default LandscapePanelContent;
