import React, { useState } from "react";
import SimpleDialog from "./SimpleDialog";
import useDialog from "./useDialog";
import { Button } from "@material-ui/core";
function Home() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("maya");

  const showDialog = useDialog();
  const handleClickOpen = (val: string) => {
    setOpen(true);
    setSelectedValue(val);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    showDialog(selectedValue);
  };

  return (
    <main>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => handleClickOpen("Hi!")}
      >
        open dialog 1
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => handleClickOpen("Bye!")}
      >
        open dialog 2
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      ></SimpleDialog>
    </main>
  );
}

export default Home;
