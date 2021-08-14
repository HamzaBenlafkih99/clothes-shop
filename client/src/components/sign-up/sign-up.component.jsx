import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { registerUserStart } from "../../redux/login/login.action";
import { connect } from "react-redux";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.registerUserStart(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  registerUserStart: (user) => dispatch(registerUserStart(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
