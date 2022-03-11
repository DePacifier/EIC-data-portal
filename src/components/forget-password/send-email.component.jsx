import React from "react";

import { Button, TextField, Stack, Typography } from "@mui/material";

// React Hook Form, Yup and Imports for form validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendEmailSchema } from "./validation-schemas";

function SendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(sendEmailSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Successfully Sent Please Check your email for a password reset link
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} justifyContent="center">
        <Typography variant="h2" color={"primary"} sx={{ mb: 2, mt: 3 }}>
          Forgot Password
        </Typography>
        <TextField
          {...register("email")}
          error={!!errors.email}
          helperText={
            errors.email
              ? errors?.email?.message
              : "Input the Email of the Account you want to reset/change the password for."
          }
          label="Email *"
          type="email"
        />
        <Button type="submit" size="large">
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default SendEmail;
