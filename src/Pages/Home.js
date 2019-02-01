import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { LargeInput } from "../Components/common"
import { LargeButton } from "../Components/common.js"

class HomePage extends Component {
    render() {
        return <div className="grid-x">
            <div className="cell medium-4 promo-intro">
              <div className="grid-container">
                <div className="promo-content grid-container">
                  <div className="promo-header">
                    <h1>All in one e-commerce management solution</h1>
                  </div>
                  <div className="cta-text">
                    <p>
                      Blast off today and join the fun? Getting started <br />
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
                      <div className="login-sign-up-header">
                        <h2>Log in</h2>
                      </div>
                        <div className="mb-3">
                            <LargeInput placeholder="Your email adress" type="email" subClass="input-border-top" />
                            <LargeInput placeholder="Password" type="password" subClass="input-border-bottom" />
                        </div>
                        <LargeButton text="Login" onClick={console.log("clicked")} />
                        <div className="grid-x align-center">
                            <Link to="" className="mr-r-3">Sign Up</Link>
                            <Link to="" className="ml-3 text-right">Forgot Password</Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>;
    }
}

export default HomePage