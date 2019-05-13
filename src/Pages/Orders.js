import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrdersContainer from '../Containers/OrdersContainer';

class OrdersPage extends Component {
  componentDidMount() {

  }

  render() {
    return <OrdersContainer history={this.props.history} />;
  }
}
OrdersPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default OrdersPage;
