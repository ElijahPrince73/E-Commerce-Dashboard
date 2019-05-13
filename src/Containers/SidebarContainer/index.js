import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import * as actions from '../../Actions/auth';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor: '#f5f5f5',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Sidebar extends React.Component {
  state = {
    mobileOpen: false,
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

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  renderUser() {
    const { user } = this.props;
    const { anchorEl } = this.state;

    if (user) {
      return (
        <div className="text-center">
          <p>{user.name}</p>
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
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className="drawer-header">{this.renderUser()}</div>
        <List>
          {['Products', 'Categories', 'Orders'].map(text => (
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
      </div>
    );

    return (
      <div className="root">
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon className="close-icon" />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: 'drawer-paper',
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: 'drawer-paper',
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.content}>
          {this.props.component}
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  theme: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state.auth;
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps,
    actions),
)(Sidebar);
