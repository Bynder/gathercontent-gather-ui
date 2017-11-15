import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChangeHandler, ...rest }) => (
  <input
    className="form-checkbox__input"
    type="checkbox"
    onChange={onChangeHandler}
    {...rest}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default Input;
