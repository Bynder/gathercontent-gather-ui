import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) =>
  <input
    className="form-radio__input"
    type="radio"
    name={props.name}
    value={props.value}
    id={props.id}
    onChange={props.onChangeHandler}
    defaultChecked={props.checked}
  />;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChangeHandler: PropTypes.func,
};

Input.defaultProps = {
  checked: false,
  onChangeHandler: () => {},
};

export default Input;
