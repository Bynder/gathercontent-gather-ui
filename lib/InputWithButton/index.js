import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const InputWithButton = ({ value, buttonText, onClick }) => (
  <span>
    <input value={value} />
    <Button onClick={() => onClick(value)}>{buttonText}</Button>
  </span>
);

InputWithButton.propTypes = {
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default InputWithButton;
