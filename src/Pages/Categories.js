import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoriesContainer from '../Containers/CategoriesContainer';

class CategoriesPage extends Component {
  componentDidMount() {

  }

  render() {
    return <CategoriesContainer history={this.props.history} />;
  }
}

CategoriesPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default CategoriesPage;
