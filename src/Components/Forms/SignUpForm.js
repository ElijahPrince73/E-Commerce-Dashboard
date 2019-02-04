import React from 'react';
import PropTypes from 'prop-types';
import { LargeInput, LargeButton } from '../common';

const SignUpForm = props => (
  <div>
    <div className="login-sign-up-header">
      <h2>Sign Up</h2>
    </div>
    <div className="mb-3">
      <LargeInput
        placeholder="Your email adress"
        type="email"
        subClass="input-border-top"
        name="email"
        handleInputChange={props.handleInputChange}
        value={props.email}
        id="email"
      />
      <LargeInput
        placeholder="Password"
        type="password"
        subClass="input-border-bottom"
        name="password"
        handleInputChange={props.handleInputChange}
        value={props.password}
        id="password"
      />
      <LargeInput
        placeholder="Confirm Password"
        type="password"
        subClass="input-border-bottom"
        name="passwordConf"
        handleInputChange={props.handleInputChange}
        value={props.passwordConf}
        id="passwordConf"
      />
    </div>
    <LargeButton text="Sign Up" />
  </div>
);

SignUpForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConf: PropTypes.string.isRequired,
};


export default SignUpForm;
