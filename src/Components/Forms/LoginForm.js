import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm = props => (
  <div>
    <Grid container direction="column" justify="center" alignItems="center">
      <div className="login-sign-up-header">
        <h2>LOGIN TO YOUR ACCOUNT</h2>
      </div>
      <TextField
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={props.handleInputChange}
        value={props.email}
        id="email"
      />
      <TextField
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        fullWidth
        name="password"
        onChange={props.handleInputChange}
        value={props.password}
        id="password"
      />
      <Button variant="contained" className="mt-3 dark-btn" type="submit">
        LOGIN
      </Button>

      <Button onClick={props.showSignUpForm} className="mt-5">
        CREATE AN ACCOUNT
      </Button>
    </Grid>
  </div>
);

LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  showSignUpForm: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
