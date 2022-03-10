import React from "react";
import { IconButton, Stack } from "@mui/material";
import {
  LockResetIcon,
  EditIcon,
  BlockIcon,
  PersonRemoveAlt1Icon,
} from "@mui/icons-material";

// Component Imports
import ConfirmationIconButton from "../confirmation-iconbutton/confirmation-iconbutton.component";

// Action Handlers

const handleAction = (userId) => {
  console.log(`Handling action for user ${userId}`);
};

function ManageUserActions({ userId, onClick }) {
  return (
    <Stack direction={"row"} spacing={2}>
      <ConfirmationIconButton
        qTitle={"Reset User Password"}
        qContent={"Are you sure you want to reset the Users Password ?"}
        onConfirm={() => handleAction(userId)}
        ariaLabel={"Reset User Password"}
      >
        <LockResetIcon />
      </ConfirmationIconButton>
      <ConfirmationIconButton
        qTitle={"Edit User"}
        qContent={"Are you sure you want to reset the Users Password ?"}
        onConfirm={() => handleAction(userId)}
        ariaLabel={"Reset User Password"}
      >
        <LockResetIcon />
      </ConfirmationIconButton>
      <ConfirmationIconButton
        qTitle={"Block User"}
        qContent={"Are you sure you want to reset the Users Password ?"}
        onConfirm={() => handleAction(userId)}
        ariaLabel={"Reset User Password"}
      >
        <LockResetIcon />
      </ConfirmationIconButton>
      <ConfirmationIconButton
        qTitle={"Remove User"}
        qContent={"Are you sure you want to reset the Users Password ?"}
        onConfirm={() => handleAction(userId)}
        ariaLabel={"Reset User Password"}
      >
        <LockResetIcon />
      </ConfirmationIconButton>
    </Stack>
  );
}

export default ManageUserActions;
