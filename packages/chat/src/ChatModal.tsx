import { FC, ReactNode, } from 'react';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Draggable from 'react-draggable';


const Inside = () => {
  return <Draggable handle="#draggable-chat-header"><Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: 2,
      p: 2,
    }}
  >
    <Box
      id="draggable-chat-header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'move',
        mb: 2,
      }}
    >
      <Typography variant="h6">Chat</Typography>
      <IconButton>
        <CloseIcon />
      </IconButton>
    </Box>
    <Box sx={{ height: 300, overflowY: 'auto' }}>
      {/* Chat messages can go here */}
      <p>Welcome to the chat!</p>
    </Box>
    <Box>
      {/* Input field */}
      <input
        type="text"
        placeholder="Type a message..."
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </Box>
  </Box></ Draggable>
}

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

const DraggableContent: FC<IDraggableContentProps> = ({ children, handleId }) => (
  <Draggable handle={`#${handleId}`}>
    {children}
  </Draggable>
)

const ChatModal: FC<IChatModalProps> = ({ chatHeaderId, children, isOpen, onClose }) => {
  const _onClose = () => onClose();

  return (
    <Modal open={isOpen} onClose={_onClose}>
      <DraggableContent handleId={chatHeaderId} >
        {children}
      </DraggableContent>
    </Modal>
  );
};

export default ChatModal;
