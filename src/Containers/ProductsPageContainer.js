import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductsPage extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="content">
        Hello
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.auth;
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPage);
