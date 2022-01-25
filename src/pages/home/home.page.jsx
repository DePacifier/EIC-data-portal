import "./home.styles.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dashboard");
  }

  function handleForgotPassword() {
    // Redirect User to Forgot Password Page
  }

  function handleRequestInvestment() {
    // Redirect User to Data Request Page
  }

  return (
    <main className="container">
      <div className="login-grid-container">
        <section className="item sign-in">
          <div className="content grid-center">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email Address</label>
              <input
                className="inputs"
                name="email"
                type="text"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                autoFocus
                autoComplete="true"
              />
              <label htmlFor="password">Password</label>
              <input
                className="inputs"
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <input
                className="signin-button pointer-cursor"
                type="submit"
                value="LOG IN"
              />
              <h2
                className="forgot pointer-cursor"
                onClick={handleForgotPassword}
              >
                Forgot Password ?
              </h2>
            </form>
            <div className="break-line"></div>
            <button
              className="request-button pointer-cursor"
              onClick={handleRequestInvestment}
            >
              Request Investment Data
            </button>
          </div>
        </section>
        <section className="item side-info">
          <div className="content grid-center">
            <img id="main-logo" src="/eic-logo-big.png" alt="EIC Big Logo" />
            <h1>Data Portal</h1>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
