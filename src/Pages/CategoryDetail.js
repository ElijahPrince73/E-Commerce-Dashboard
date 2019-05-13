import React from 'react';
import PropTypes from 'prop-types';
import CategoryDetailContainer from '../Containers/CategoryDetailContainer';

const CategoryDetailPage = props => <CategoryDetailContainer categoryId={props.match.params.id} />;

CategoryDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CategoryDetailPage;
