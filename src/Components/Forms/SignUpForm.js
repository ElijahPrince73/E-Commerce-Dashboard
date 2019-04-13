import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUpForm = props => (
  <div>
    <Grid container direction="column" justify="center" alignItems="center">
      <form onSubmit={props.onSubmit} className="login-form">
        <div className="login-sign-up-header">
          <h2>CREATE AN ACCOUNT</h2>
        </div>
        <TextField
          label="Name"
          type="name"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={props.handleInputChange}
          value={props.name}
          id="name"
        />
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
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          fullWidth
          name="passwordConf"
          onChange={props.handleInputChange}
          value={props.passwordConf}
          id="passwordConf"
        />
        <Button variant="contained" className="mt-3 dark-btn" type="submit">
          CREATE AN ACCOUNT
        </Button>

        <Button onClick={props.showLoginForm} className="mt-5" fullWidth>
          LOGIN
        </Button>
      </form>
    </Grid>
  </div>
);

SignUpForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  showLoginForm: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConf: PropTypes.string.isRequired,
};


export default SignUpForm;
