import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, id, checked, disabled, onChangeHandler, ...rest }) =>
  <input
    disabled={disabled}
    className="form-checkbox__input"
    type="checkbox"
    name={name}
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
  onChangeHandler: PropTypes.func,
};

Input.defaultProps = {
  checked: false,
  name: '',
  disabled: false,
  onChangeHandler: () => {},
};

export default Input;
