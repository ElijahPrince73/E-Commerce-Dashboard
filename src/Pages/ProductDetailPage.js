import React, { Component } from 'react';
import ProductDetailContainer from '../Containers/ProductDetailContainer';

class HomePage extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <ProductDetailContainer productId={this.props.match.params.id} />
    );
  }
}

export default HomePage;
