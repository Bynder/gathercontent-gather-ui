import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChangeHandler, className, ...rest }) => (
  <input
    className={`form-radio__input ${className}`}
    type="radio"
    onChange={onChangeHandler}
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
