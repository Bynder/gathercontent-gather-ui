import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChangeHandler, label, ...rest }) => (
  <input
    className="form-checkbox__input"
    type="checkbox"
    onChange={onChangeHandler}
    aria-label={label}
    {...rest}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  label: PropTypes.string
};

Input.defaultProps = {
  label: ''
};

export default Input;
