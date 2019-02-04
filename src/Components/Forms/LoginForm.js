import React from 'react';
import PropTypes from 'prop-types';
import { LargeInput, LargeButton } from '../common';

const LoginForm = props => (
  <div>
    <div className="login-sign-up-header">
      <h2>Sign in</h2>
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
    </div>
    <LargeButton text="Sign In" />
  </div>
);

LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
