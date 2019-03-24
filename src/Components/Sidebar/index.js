import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';


class SideNav extends Component {
  componentDidCatch() {}

  render() {
    return (
      <div className="root">
        <Drawer
          variant="permanent"
          classes={{
            paper: 'draw-paper',
          }}
          anchor="left"
        >
          <div className="drawer-header">
            Header Component
          </div>
          <List>
            {['Products', 'Product Detail', 'Category', 'Orders', 'Order Detail'].map(text => (
              <div>
                <Divider />
                <ListItem button key={text}>
                  <Link to={`/${text.toLowerCase()}`}>{text}</Link>
                </ListItem>
              </div>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
