import "./home.styles.scss";

import React, { Component } from "react";

class HomePage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    // Handle forms login request
  };

  handleChange = (event) => {
    // Handle login data values state change
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleForgotPassword = () => {
    // Redirect User to Forgot Password Page
    this.props.history.push("/forgot-password");
  };

  handleRequestInvestment = (event) => {
    // Redirect User to Data Request Page
  };

  render() {
    return (
      <div className="container">
        <div className="login-grid-container">
          <div className="item sign-in">
            <div className="content">
              <h2 className="signin-title">Sign-In</h2>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                  className="inputs"
                  name="email"
                  type="text"
                  placeholder="name@example.com"
                  value={this.state.email}
                  onChange={this.handleChange}
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
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <span className="forgot" onClick={this.handleForgotPassword}>
                  Forgot Password ?
                </span>
                <input className="signin-button" type="submit" value="LOG IN" />
              </form>
              <button onClick={this.handleRequestInvestment}>
                Request Investment Data
              </button>
            </div>
          </div>
          <div className="item side-info">
            <div className="content">
              <h1>
                Welcome to
                <br />
                Minalesh Tera
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
