import { type FC, ReactNode, useEffect } from 'react';
import Draggable from 'react-draggable';

interface IDraggableContentProps {
  children: ReactNode;
  handleId: string;
}

export interface IChatModalProps {
  chatHeaderId: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const DraggableContent: FC<IDraggableContentProps> = ({ children, handleId }) => {
  useEffect(() => {
    const headerElement = document.getElementById(handleId);
    if (headerElement) {
      headerElement.style.cursor = 'move';
    }
  }, [handleId]);

  return <Draggable handle={`#${handleId}`}>{children}</Draggable>;
};

/**
 *
 * @todo - floating element based on a parent element boundaries
 *          consider using mui modal or floating-ui
 */
const ChatModal: FC<IChatModalProps> = ({ chatHeaderId, children, isOpen, onClose }) => {
  const _onClose = () => onClose();

  return (
    <div>
      <DraggableContent handleId={chatHeaderId}>{children}</DraggableContent>
    </div>
  );
};

export default ChatModal;
