import React from 'react';
import PropTypes from 'prop-types';

const LargeInput = (props) => {
  const {
    type, placeholder, subClass, handleInputChange, value, name, id,
  } = props;
  return (
    <div>
      <div className="col-3">
        <input
          className={`effect-16 input-large ${subClass}`}
          type={type}
          id={id}
          onChange={handleInputChange}
          value={value}
          name={name}
        />
        <label htmlFor={id}>{placeholder}</label>
      </div>
    </div>
  );
};

LargeInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  subClass: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export { LargeInput };
