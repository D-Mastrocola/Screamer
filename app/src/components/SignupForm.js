import React, { Component } from "react";

class SignupForm extends Component {
  render() {
    return (
      <form className="signup-form">
        <input id="signup-email-input" type="text" placeholder="Email" />
        <input id="signup-password-input" type="text" placeholder="Password" />
        <input
          id="signup-password-repeat-input"
          type="text"
          placeholder="Password again"
        />
        <button className="btn" id="signup-btn">
          Signup
        </button>
      </form>
    );
  }
}
export default SignupForm;