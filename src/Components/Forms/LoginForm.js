import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoginForm = props => (
  <div className="login-form">
    <Grid container direction="column" justify="center" alignItems="center">
      <form onSubmit={props.onSubmit}>
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

        {!props.loading ? (
          <Button variant="contained" className="mt-3 dark-btn" type="submit">
            LOGIN
          </Button>
        ) : (
          <div className="text-center mt-3">
            <CircularProgress />
          </div>
        )}

        {props.error ? <div className="error-message mt-3">Invalid username or password</div> : null}

        <Button onClick={props.showSignUpForm} className="mt-5 text-center" fullWidth>
          CREATE AN ACCOUNT
        </Button>
      </form>
    </Grid>
  </div>
);

LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  showSignUpForm: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default LoginForm;
