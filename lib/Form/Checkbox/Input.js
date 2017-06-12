import React from 'react';
import PropTypes from 'prop-types';

const Input = props =>
  <input
    disabled={props.disabled}
    className="form-checkbox__input"
    type="checkbox"
    name={props.name}
    id={props.id}
    onChange={props.onChangeHandler}
    defaultChecked={props.checked}
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
  disabled: false,
  onChangeHandler: () => {},
};

export default Input;
