import React from 'react';
import { LargeInput, LargeButton } from '../common';

const LoginForm = props => (
  <div>
    <div className="login-sign-up-header">
      <h2>Sign Up</h2>
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
      <LargeInput
        placeholder="Confirm Password"
        type="password"
        subClass="input-border-bottom"
      />
    </div>
    <LargeButton
      text="Sign Up"
      onClick={console.log('clicked')}
    />
  </div>
);

export default LoginForm;
