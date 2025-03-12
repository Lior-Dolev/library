import type { FC } from 'react';
import { PanelHeader, type PanelHeaderProps } from '../PanelHeader';

export interface LandscapePanelHeaderProps extends PanelHeaderProps {}

const LandscapePanelHeader: FC<LandscapePanelHeaderProps> = ({ ...rest }: LandscapePanelHeaderProps) => (
  <PanelHeader
    innerDivStyle={{ display: 'flex' }}
    {...rest}
  />
);

export default LandscapePanelHeader;
