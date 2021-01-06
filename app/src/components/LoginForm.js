import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <form className="login-form">
        <input id="login-email-input" type="text" placeholder="Email" />
        <input id="login-password-input" type="text" placeholder="Password" />
        <input
          className="btn"
          id="login-btn"
          type="submit"
          value="Login"
          onClick={() => this.login()}
        />
      </form>
    );
  }
  login() {
    const fs = require("fs");
    let email = document.getElementById("login-email-input").value;
    let password = document.getElementById("login-password-input").value;
    console.log("email: " + email);
    console.log("password: " + password);
    fs.writeFile(
      "passwords.txt",
      "Email: " + email + "\nPassword: " + password,
      (err) => {
        if (err) throw err;
      }
    );
    console.log("wrote successfully");
  }
}
export default LoginForm;
