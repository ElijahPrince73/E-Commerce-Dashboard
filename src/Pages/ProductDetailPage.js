import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductDetailContainer from '../Containers/ProductDetailContainer';

class ProductDetailPage extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <ProductDetailContainer productId={this.props.match.params.id} />
    );
  }
}

ProductDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ProductDetailPage;
