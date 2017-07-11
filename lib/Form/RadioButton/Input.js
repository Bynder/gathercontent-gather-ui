import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ disabled, name, value, id, checked, onChangeHandler, ...rest }) =>
  <input
    disabled={disabled}
    className="form-radio__input"
    name={name}
    type="radio"
    value={value}
    id={id}
    onChange={onChangeHandler}
    checked={checked}
    {...rest}
  />;

Input.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  disabled: false,
  onChangeHandler: () => {},
};

export default Input;
