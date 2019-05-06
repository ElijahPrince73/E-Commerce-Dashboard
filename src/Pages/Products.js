import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsContainer from '../Containers/ProductsContainer';

class ProductsPage extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <ProductsContainer history={this.props.history} />
    );
  }
}

ProductsPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default ProductsPage;
