import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStylesSignIn } from "../../pages/SignIn/SignInStyles";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  classes: ReturnType<typeof useStylesSignIn>;
  visible: boolean;
  onClose: () => void;
}

export const ModalBlock: React.FC<ModalProps> = ({
  title,
  children,
  visible = false,
  onClose,
}): React.ReactElement | null => {
  if (!visible) {
    return null;
  }
  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
    >
      <DialogTitle
        id="alert-dialog-title"
        alignItems="center"
        fontWeight="bold"
        fontSize="20px"
      >
        <IconButton onClick={onClose} color="secondary">
          <CloseIcon></CloseIcon>
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
