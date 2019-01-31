import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"

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
                        <Link to="" className="button cta-button large">Explore More</Link>
                </div>
              </div>
            </div>
            <div className="cell medium-7 medium-offset-1 login-form">
              <div className="grid-container">
                <div className="login-sign-up-form">
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <form>
                    <div className="grid-x grid-padding-x">
                      <div className="medium-6 cell">
                        <label>
                          Email
                          <input type="text" />
                        </label>
                        <label>
                          Password
                          <input type="password" />
                        </label>
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