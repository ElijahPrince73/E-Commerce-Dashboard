import React from 'react';
import PropTypes from 'prop-types';
import OrderDetailContainer from '../Containers/OrderDetailContainer';

const OrderDetailPage = props => (
  <OrderDetailContainer orderId={props.match.params.id} />
);

OrderDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default OrderDetailPage;
