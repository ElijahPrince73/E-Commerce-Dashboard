import React from 'react';
import PropTypes from 'prop-types';

const LargeButton = (props) => {
  const { text } = props;
  return (
    <button className="button primary-button large expanded" type="submit">
      {text}
    </button>
  );
};

LargeButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export { LargeButton };
