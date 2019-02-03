import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Components/Forms/LoginForm';
import SignUpForm from '../Components/Forms/SignUpForm';

class HomePage extends Component {
    state = {
      activeTab: true,
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

    handleSigIn() {

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
                <form>
                  <div className="grid-x grid-padding-x ml-5">
                    <div className="medium-6 cell mb-3">
                      {this.state.activeTab ? (
                        <LoginForm />
                      ) : (
                        <SignUpForm />
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
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default HomePage;
