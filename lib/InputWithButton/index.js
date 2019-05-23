import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const InputWithButton = ({ value, buttonText, onClick, id }) => (
  <div className="input-with-button">
    <input id={id} value={value} className="input-with-button--input" />
    <Button
      types={['primary', 'input-appendage']}
      onClick={() => {
        const inputElement = document.getElementById(id);
        onClick(inputElement);
      }}
    >
      {buttonText}
    </Button>
  </div>
);

InputWithButton.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default InputWithButton;
