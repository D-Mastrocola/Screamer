import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login"
    };
  }
  render() {
    return this.state.formType === "login" ? (
      <div className="welcome-container">
        <div className="cta-container">
          <h2>Welcome to Screamer!</h2>
          <LoginForm />
          <p>or</p>
          <button
            className="btn"
            onClick={() => this.changeForm("signup")}
            id="signup-btn"
          >
            Sign up
          </button>
        </div>
      </div>
    ) : (
      <div className="welcome-container">
        <div className="cta-container">
          <h2>Welcome to Screamer!</h2>
          <SignupForm />
          <p>or</p>
          <button
            className="btn"
            onClick={() => this.changeForm("login")}
            id="login-btn"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
  changeForm(state) {
    this.setState({ formType: state });
  }
}
export default Welcome;
