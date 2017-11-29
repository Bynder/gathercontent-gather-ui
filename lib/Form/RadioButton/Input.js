import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChangeHandler, className, label, ...rest }) => (
  <input
    className={`form-radio__input ${className}`}
    type="radio"
    onChange={onChangeHandler}
    aria-label={label}
    {...rest}
  />
);

Input.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  className: PropTypes.string
};

Input.defaultProps = {
  className: ''
};

export default Input;
