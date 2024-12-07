import { FC, ReactNode } from "react";

export interface IChatMainProps {
  children: ReactNode;
  isLoading?: boolean;
}

const ChatMain: FC<IChatMainProps> = ({
  children
}) => (
  <div>{children}</div>
)

export default ChatMain;