import React from "react";

import { Paper } from "@mui/material";

//Component Imports
import SendEmail from "../../components/forget-password/send-email.component";
import SendPassword from "../../components/forget-password/send-password.component";

function ForgetPassword({ pass = false }) {
  return (
    <main className="grid-center light-grey-bg">
      <Paper className="paper-center" elevation={3}>
        {!pass ? <SendEmail /> : <SendPassword />}
      </Paper>
    </main>
  );
}

export default ForgetPassword;
