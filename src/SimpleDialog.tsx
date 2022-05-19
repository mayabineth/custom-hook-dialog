import React from "react";
import { Dialog, Button, DialogTitle } from "@material-ui/core";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{selectedValue}</DialogTitle>
      <Button variant="outlined" color="primary" onClick={handleClose}>
        ok!
      </Button>
    </Dialog>
  );
}

export default SimpleDialog;
