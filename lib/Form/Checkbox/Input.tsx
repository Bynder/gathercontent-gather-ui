import React from 'react';
import PropTypes from 'prop-types';

function Input({
  onChangeHandler,
  className,
  label,
  id,
  checked,
  name,
  value,
  disabled
}: any) {
  return <input
    className={`form-radio__input ${className}`}
    type="checkbox"
    onChange={onChangeHandler}
    aria-label={label}
    id={id}
    name={name}
    checked={checked}
    value={value}
    disabled={disabled}
  />
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

Input.defaultProps = {
  label: '',
  className: '',
  value: '',
  disabled: false
};

export default Input;
