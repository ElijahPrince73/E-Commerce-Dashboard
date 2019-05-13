import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import * as actions from '../Actions/orders';

class OrderDetailContainer extends Component {
  state = {
    value: 0,
  };

  componentWillMount() {
    const { getOrder, orderId } = this.props;
    getOrder(orderId);
  }

  handleCloseNotification = () => {
    // this.props.closeNotification();
  };

  renderOrder() {
    if (Object.keys(this.props.order).length > 0) {
      console.log(this.props);
      const {
        address, email, items, orderNumber, productList, totalAmount, zip,
      } = this.props.order;
      return (
        <Grid container spacing={24} className="p-3">
          <Grid container spacing={24} className="p-3">
            <Grid item xs={3}>
              Order Number:
            </Grid>
            <Grid item={9}>{orderNumber}</Grid>
          </Grid>

          <Grid container spacing={24} className="p-3">
            <Grid item xs={3}>
              Email:
            </Grid>
            <Grid item={9}>{email}</Grid>
          </Grid>

          <Grid container spacing={24} className="p-3">
            <Grid item xs={3}>
              Products Ordered:
            </Grid>
            <Grid item={9}>
              {productList.map(product => (
                <div>
                  <p>
Name:
                    {' '}
                    {product.productName}
                  </p>
                  <p>
Quantity:
                    {' '}
                    {product.quantity}
                  </p>
                  <p>
Price:
                    {' '}
                    {product.price}
                  </p>
                </div>
              ))}
            </Grid>
          </Grid>
          <Grid container spacing={24} className="p-3">
            <Grid item xs={3}>
              Items:
            </Grid>
            <Grid item={9}>{items}</Grid>
          </Grid>
          <Grid container spacing={24} className="p-3">
            <Grid item xs={3}>
              Address:
            </Grid>
            <Grid item={9}>{address}</Grid>
          </Grid>
          <Grid container spacing={24} className="p-3">
            <Grid item xs={3}>
              ZIP:
            </Grid>
            <Grid item={9}>{zip}</Grid>
          </Grid>
          <Grid container spacing={24} className="p-3">
            <Grid item xs={3}>
              Total:
            </Grid>
            <Grid item={9}>{totalAmount}</Grid>
          </Grid>
        </Grid>
      );
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <form>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            // open={this.props.open}
            onClose={this.handleCloseNotification.bind(this)}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Category Created</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleCloseNotification.bind(this)}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={24}
            className="my-4"
          >
            <div className="products-background" />
            <Grid container item xs={6} className="products-title">
              <Grid item xs={1}>
                <ArrowBack />
              </Grid>
              <Grid item xs={10} className="mt-1">
                <Link to="/categories" className="back-link">
                  <span>Orders</span>
                </Link>
                <h2 className="m-0 mt-3 mb-1">Order</h2>
              </Grid>
            </Grid>

            <Grid item xs={6} className="text-right">
              <Button variant="contained" type="submit">
                SAVE
              </Button>
            </Grid>
            <Grid item xs={12} className="new-product-container">
              <AppBar position="static" className="new-product-tab-bar">
                <Tabs
                  value={value}
                  onChange={this.handleChangeTab}
                  classes={{ indicator: 'indicator' }}
                  variant="scrollable"
                >
                  <Tab label="Basic Info" className="tab-label" />
                </Tabs>
              </AppBar>

              {value === 0 && (
              <div className="product-info">
                {this.renderOrder()}
              </div>
              )}
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

OrderDetailContainer.propTypes = {
  getOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  //   open: PropTypes.bool.isRequired,
  orderId: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
  orderNumber: PropTypes.string.isRequired,
  productList: PropTypes.array.isRequired,
  totalAmount: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return state.orderList;
}

export default connect(
  mapStateToProps,
  actions,
)(OrderDetailContainer);
