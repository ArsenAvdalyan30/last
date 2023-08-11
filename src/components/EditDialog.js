import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

function EditDialog({handleEditChange, inputEditValue, onClose, onEdit }) {

  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Edit todo</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-basic"
          onChange={handleEditChange}
          value={inputEditValue}
          label=""
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onEdit} autoFocus>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditDialog;
