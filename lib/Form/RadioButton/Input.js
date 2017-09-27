import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  disabled,
  name,
  value,
  id,
  checked,
  onChangeHandler,
  className
}) => (
  <input
    disabled={disabled}
    className={`form-radio__input ${className}`}
    name={name}
    type="radio"
    value={value}
    id={id}
    onChange={onChangeHandler}
    checked={checked}
  />
);

Input.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func,
  className: PropTypes.string
};

Input.defaultProps = {
  value: '',
  checked: false,
  disabled: false,
  onChangeHandler: () => {},
  className: ''
};

export default Input;
