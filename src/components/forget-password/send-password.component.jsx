import React from "react";
import { useParams } from "react-router-dom";
import { Button, TextField, Stack, Typography } from "@mui/material";

// React Hook Form, Yup and Imports for form validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendPasswordSchema } from "./validation-schemas";

function SendPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(sendPasswordSchema),
  });

  let params = useParams();

  const onSubmit = (data) => {
    console.log(data, params.changeID);
    // Successfully Sent Please Check your email for a password reset link
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} justifyContent="center">
        <Typography variant="h2" color={"primary"} sx={{ mb: 2, mt: 3 }}>
          Change Password
        </Typography>
        <Stack spacing={2}>
          <TextField
            {...register("password")}
            error={!!errors.password}
            helperText={
              errors.password
                ? errors?.password?.message
                : "Type your new Password."
            }
            label="Password *"
            type="password"
          />
          <TextField
            {...register("rePassword")}
            error={!!errors.rePassword}
            helperText={
              errors.rePassword
                ? errors?.rePassword?.message
                : "Retype your new Password."
            }
            label="Retype-Password *"
            type="password"
          />
        </Stack>
        <Button type="submit" size="large">
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default SendPassword;
