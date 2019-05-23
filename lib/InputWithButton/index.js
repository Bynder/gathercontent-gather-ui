import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const InputWithButton = ({ value, buttonText, onClick }) => (
  <div className="input-with-button">
    <input value={value} className="input-with-button--input" />
    <Button
      types={['primary', 'input-appendage']}
      onClick={() => onClick(value)}
    >
      {buttonText}
    </Button>
  </div>
);

InputWithButton.propTypes = {
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default InputWithButton;
