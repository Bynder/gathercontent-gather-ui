import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  onChangeHandler,
  className,
  label,
  id,
  checked,
  name,
  value
}) => (
  <input
    className={`form-radio__input ${className}`}
    type="checkbox"
    onChange={onChangeHandler}
    aria-label={label}
    id={id}
    name={name}
    checked={checked}
    value={value}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool.isRequired
};

Input.defaultProps = {
  label: '',
  className: '',
  value: ''
};

export default Input;
