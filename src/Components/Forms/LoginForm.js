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
      />
      <LargeInput
        placeholder="Password"
        type="password"
        subClass="input-border-bottom"
      />
    </div>
    <LargeButton
      text="Sign In"
      onClick={props.onClick}
    />
  </div>
);

LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoginForm;
