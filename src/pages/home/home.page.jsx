import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { TextField, Button, Stack } from "@mui/material";

import "./home.styles.scss";

// Yup Validation and Schema Import
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "./validation-schema";

const HomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  let navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  function handleForgotPassword() {
    // Redirect User to Forgot Password Page
    navigate("/forget-password");
  }

  function handleRequestInvestment() {
    // Redirect User to Data Request Page
    navigate("/request-data");
  }

  return (
    <main className="container">
      <div className="login-flex-container">
        <section className="item sign-in">
          <div className="login-content grid-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="signin-title">Sign in</h2>
              <span className="description">Sign in with email address</span>
              <Stack spacing={2}>
                <TextField
                  error={!!errors.email}
                  helperText={errors.email && errors?.email?.message}
                  {...register("email")}
                  label="Email"
                  autoFocus
                />
                <TextField
                  type="password"
                  label="Password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password && errors?.password?.message}
                />
              </Stack>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
                type="submit"
              >
                Submit
              </Button>

              <p className="forgot-password">
                <span onClick={handleForgotPassword}>Forgot Password ?</span>
              </p>
            </form>
            <div className="break-line"></div>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mb: 1 }}
              onClick={handleRequestInvestment}
            >
              Request Investment Data
            </Button>
          </div>
        </section>
        <section className="item side-info">
          <div className="login-content grid-center">
            <img id="main-logo" src="/eic-logo-big.png" alt="EIC Big Logo" />
            <h1>Data Portal</h1>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
