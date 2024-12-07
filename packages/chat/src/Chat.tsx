import { css } from '@emotion/react';
import { Children, isValidElement, type FC, type ReactNode } from 'react';
import { ChatComponentName } from './componentNames';
import { Paper } from '@mui/material';

export interface IChatProps {
  /**
   * must have 2-3 children:
   * 1. ChatHeader
   * 2. ChatMain
   * 3. ChatFooter - optional
   */
  children: ReactNode[];
  /** hide footer if exists */
  readOnly?: boolean;
}

const chatGridCss = css({
  height: '100%',
  display: 'grid',
});
const chatGrid3RowsCss = css({
  gridTemplateRows: 'auto 1fr auto',
});
const chatGrid2RowsCss = css({
  gridTemplateRows: 'auto 1fr',
});

const Chat: FC<IChatProps> = ({ children, readOnly }) => {
  validateChildren(children);

  const filteredChildren = readOnly && children.length === 3 ? children.slice(0, 2) : children;

  return (
    <Paper css={[chatGridCss, children?.length === 2 ? chatGrid2RowsCss : chatGrid3RowsCss]}>{filteredChildren}</Paper>
  );
};

const hasDisplayName = (child: ReactNode, displayName: string): boolean => {
  return isValidElement(child) && typeof child.type !== 'string' && (child.type as any).displayName === displayName;
};

function validateChildren(children: ReactNode[]) {
  const childArray = Children.toArray(children);

  if (childArray.length < 2 || childArray.length > 3) {
    console.warn(
      `Chat component expects 2 or 3 children: ${ChatComponentName.header}, ${ChatComponentName.main}, and optionally ${ChatComponentName.footer}. Received ${childArray.length} children.`,
    );
    return false;
  }

  if (!hasDisplayName(childArray[0], ChatComponentName.header)) {
    console.warn(`The first child of Chat must be a ${ChatComponentName.header} component.`);
    return false;
  }

  if (!hasDisplayName(childArray[1], ChatComponentName.main)) {
    console.warn(`The second child of Chat must be a ${ChatComponentName.main} component.`);
    return false;
  }

  if (childArray.length === 3 && !hasDisplayName(childArray[2], ChatComponentName.footer)) {
    console.warn(`The third child of Chat must be a ${ChatComponentName.footer} component.`);
    return false;
  }

  return true;
}

export default Chat;
