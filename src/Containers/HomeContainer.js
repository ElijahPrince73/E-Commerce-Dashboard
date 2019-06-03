import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../images/fuse.svg';
import LoginForm from '../Components/Forms/LoginForm';
import SignUpForm from '../Components/Forms/SignUpForm';
import * as actions from '../Actions/auth';


class HomePage extends Component {
    state = {
      activeTab: true,
      name: '',
      email: '',
      password: '',
      passwordConf: '',
      fade: false,
    };

    showLoginForm() {
      this.setState({
        activeTab: true,
      });
    }

    showSignUpForm() {
      this.setState({
        activeTab: false,
        fade2: true,
      });
    }

    handleInputChange(e) {
      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value,
      });
    }

    handleLogin(e) {
      e.preventDefault();
      this.props.loginUser(this.state);
    }

    handleRegister(e) {
      e.preventDefault();
      const {
        name, email, password, passwordConf,
      } = this.state;

      this.props.registerUser({
        name, email, password, passwordConf,
      });
    }

    render() {
      const { loading, error } = this.props.auth;

      return (
        <div className="promo-intro">
          <Grid container>
            <Hidden smDown>
              <Grid item md={9}>
                <div className="promo-content">
                  <img src={Logo} alt="" className="logo" />
                  <div className="promo-header">
                    <h1>All in one e-commerce management solution</h1>
                  </div>
                  <div className="cta-text">
                    <p>
                      Blast off today and join the fun? Getting started
                      <br />
                      is only a few click away
                    </p>
                  </div>
                  <Link to="" className="button cta-button large">
                    Explore More
                  </Link>
                </div>
              </Grid>
            </Hidden>

            <Grid item md={3} xs={12} className="login-sign-up">
              {this.state.activeTab ? (
                <Slide direction="left" in mountOnEnter unmountOnExit timeout={800}>
                  <LoginForm
                    onSubmit={this.handleLogin.bind(this)}
                    handleInputChange={this.handleInputChange.bind(this)}
                    email={this.state.email}
                    password={this.state.password}
                    showSignUpForm={this.showSignUpForm.bind(this)}
                    loading={loading}
                    error={error}
                  />
                </Slide>
              ) : null}
              {!this.state.activeTab ? (
                (
                  <Slide direction="left" in mountOnEnter unmountOnExit timeout={800}>
                    <SignUpForm
                      onSubmit={this.handleRegister.bind(this)}
                      handleInputChange={this.handleInputChange.bind(this)}
                      name={this.state.name}
                      email={this.state.email}
                      password={this.state.password}
                      passwordConf={this.state.passwordConf}
                      showLoginForm={this.showLoginForm.bind(this)}
                      loading={loading}
                      error={error}
                    />
                  </Slide>
                )
              ) : null}
            </Grid>
          </Grid>
        </div>
      );
    }
}

HomePage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  actions,
)(HomePage);
