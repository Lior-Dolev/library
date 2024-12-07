import { useState } from 'react';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Draggable from 'react-draggable';

/**
 * @todo: when chat is readonly - do not render footer
 */
const ChatModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Chat</button>
      <Draggable>
        <Modal open={open} onClose={handleClose}>
          <Box
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
              <IconButton onClick={handleClose}>
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
          </Box>
        </Modal>
      </Draggable>
    </div>
  );
};

export default ChatModal;
