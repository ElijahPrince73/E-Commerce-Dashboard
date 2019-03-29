import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Actions/auth';

class SideNav extends Component {
  componentWillMount() {
    this.props.getProfile();
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
          <div className="drawer-header">Header Component</div>
          <List>
            {[
              'Products',
              'Product Detail',
              'Category',
              'Orders',
              'Order Detail',
            ].map((text, index) => (
              <div key={text}>
                <Divider key={index} />
                <ListItem button key={text}>
                  <Link to={`/${text.toLowerCase()}`} key={text}>
                    {text}
                  </Link>
                </ListItem>
              </div>
            ))}
          </List>
        </Drawer>
        <div className="content">{this.props.component}</div>
      </div>
    );
  }
}

SideNav.propTypes = {
  component: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return state.auth;
}

export default connect(
  mapStateToProps,
  actions,
)(SideNav);
