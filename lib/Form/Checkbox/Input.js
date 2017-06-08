import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <input
      className="form-checkbox__input"
      type="checkbox"
      name={props.name}
      id={props.id}
      onChange={props.onChangeHandler}
      defaultChecked={props.checked}
    />);
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default Input;
