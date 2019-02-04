import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../Components/Forms/LoginForm';
import SignUpForm from '../Components/Forms/SignUpForm';
import * as actions from '../Actions/auth';

class HomePage extends Component {
    state = {
      activeTab: true,
      email: '',
      password: '',
      passwordConf: '',
    };

    showLoginForm() {
      this.setState({
        activeTab: true,
      });
    }

    showSignUpForm() {
      this.setState({
        activeTab: false,
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
      const { email, password, passwordConf } = this.state;
      this.props.registerUser({ email, password, passwordConf });
    }

    render() {
      return (
        <div className="grid-x">
          <div className="cell medium-4 promo-intro">
            <div className="grid-container">
              <div className="promo-content grid-container">
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
            </div>
          </div>
          <div className="cell medium-7 medium-offset-1 login-form">
            <div className="grid-container">
              <div className="login-sign-up-form">
                <div className="grid-x grid-padding-x ml-5">
                  <div className="medium-6 cell mb-3">
                    {this.state.activeTab ? (
                      <form onSubmit={this.handleLogin.bind(this)}>
                        <LoginForm
                          handleInputChange={this.handleInputChange.bind(
                            this,
                          )}
                          email={this.state.email}
                          password={this.state.password}
                        />
                      </form>
                    ) : (
                      <form onSubmit={this.handleRegister.bind(this)}>
                        <SignUpForm
                          handleInputChange={this.handleInputChange.bind(
                            this,
                          )}
                          email={this.state.email}
                          password={this.state.password}
                          passwordConf={this.state.passwordConf}
                        />
                      </form>
                    )}

                    <div className="grid-x align-center">
                      {this.state.activeTab ? (
                        <button
                          onClick={this.showSignUpForm.bind(this)}
                          type="button"
                          className="clear button"
                        >
                            Sign Up
                        </button>
                      ) : (
                        <button
                          onClick={this.showLoginForm.bind(this)}
                          type="button"
                          className="clear button"
                        >
                            Sign In
                        </button>
                      )}
                      <button
                        onClick={this.showLoginForm.bind(this)}
                        type="button"
                        className="clear button"
                      >
                          Forgot Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

HomePage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  actions,
)(HomePage);
