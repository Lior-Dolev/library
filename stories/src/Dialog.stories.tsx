import type { Meta } from '@storybook/react';
import Dialog, { DialogContent, DialogContentText, DialogTitle } from '@horus-library/dialog';
import { Button } from '@mui/material';
import { useState } from 'react';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Dialog>;

export default meta;

const contentText = `לא זיהינו פעולה שלך עם המערכת ב-5 הדקות האחרונות, לכן השהינו את פעילות המערכת.
המשמעות היא שהמידע המוצג אינו עדכני.
`;
const contentText2 = `עדכון המידע יבוצע אוטומטית עם זיהוי פעולה חדשה שלך.`;

export const Default = () => {
  const [open, setOpen] = useState<boolean>(true);

  const toggleDialog = () => setOpen((prev) => !prev);

  return (
    <>
      <Button
        variant={'contained'}
        onClick={toggleDialog}
      >
        {open ? 'סגירה' : 'פתיחה'}
      </Button>
      <Dialog
        open={open}
        onClose={toggleDialog}
      >
        <DialogTitle onClose={toggleDialog}>עדיין פה?</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>{contentText}</DialogContentText>
          <DialogContentText>{contentText2}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
