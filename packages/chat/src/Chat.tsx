import { css } from "@emotion/react";
import { Children, isValidElement, type FC, type ReactNode } from "react";

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
  display: 'grid'
})
const chatGrid3RowsCss = css({
  gridTemplateRows: 'auto 1fr auto'
})
const chatGrid2RowsCss = css({
  gridTemplateRows: 'auto 1fr'
})

const Chat: FC<IChatProps> = ({ children, readOnly }) => {
  validateChildren(children);

  // Handle `readOnly` by conditionally hiding the footer
  const filteredChildren =
    readOnly && children.length === 3
      ? children.slice(0, 2)
      : children;

  return (
    <div css={[chatGridCss, children?.length === 2 ? chatGrid2RowsCss : chatGrid3RowsCss]}>
      {filteredChildren}
    </div>
  )
}

const hasDisplayName = (
  child: ReactNode,
  displayName: string
): boolean => {
  return (
    isValidElement(child) &&
    typeof child.type !== "string" &&
    (child.type as any).displayName === displayName
  );
};

function validateChildren(children: ReactNode[]) {
  const childArray = Children.toArray(children);

  if (childArray.length < 2 || childArray.length > 3) {
    console.warn(
      `Chat component expects 2 or 3 children: ChatHeader, ChatMain, and optionally ChatFooter. Received ${childArray.length} children.`
    );
    return false;
  }

  if (!hasDisplayName(childArray[0], "ChatHeader")) {
    console.warn(
      `The first child of Chat must be a ChatHeader component.`
    );
    return false;
  }

  if (!hasDisplayName(childArray[1], "ChatMain")) {
    console.warn(
      `The second child of Chat must be a ChatMain component.`
    );
    return false;
  }

  if (
    childArray.length === 3 &&
    !hasDisplayName(childArray[2], "ChatFooter")
  ) {
    console.warn(
      `The third child of Chat must be a ChatFooter component.`
    );
    return false;
  }

  return true;
};

export default Chat;