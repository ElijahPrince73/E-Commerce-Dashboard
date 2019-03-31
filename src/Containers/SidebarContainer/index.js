import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Actions/auth';


class SideNav extends Component {
  state = {
    anchorEl: null,
  };

  componentWillMount() {
    this.props.getProfile();
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout() {

  }

  renderUser() {
    const { user } = this.props;
    const { anchorEl } = this.state;
    if (user) {
      return (
        <div className="text-center">
          <p>Name of User</p>
          <span
            className="user-email"
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            {user.email}
          </span>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            className="menu"
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="root">
        <Drawer
          className="drawer"
          variant="permanent"
          classes={{
            paper: 'draw-paper',
          }}
          anchor="left"
        >
          <div className="drawer-header">{this.renderUser()}</div>

          <List>
            {[
              'Products',
              'Categories',
              'Orders',
              'New Product',
            ].map(text => (
              <div key={text} className="nav-item">
                <NavLink
                  to={`/${text.replace(/\s+/g, '-').toLowerCase()}`}
                  activeClassName="selected"
                  className="nav-item-link"
                >
                  <span className="nav-item-text">{text}</span>
                </NavLink>
              </div>
            ))}
          </List>
        </Drawer>

        <Grid container className="px-6">
          <Grid item xs={12}>
            {this.props.component}
          </Grid>
        </Grid>
      </div>
    );
  }
}

SideNav.propTypes = {
  component: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state.auth;
}

export default connect(
  mapStateToProps,
  actions,
)(SideNav);
