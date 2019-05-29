import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';

const InputWithButton = ({
  value,
  buttonText,
  onClick,
  inputId,
  buttonId,
  disabled
}) => (
  <div className="input-with-button">
    <input
      readOnly
      id={inputId}
      aria-labelledby={buttonId}
      value={value}
      className={cx('input-with-button__input', {
        'input-with-button__input--disabled': disabled
      })}
    />
    <Button
      id={buttonId}
      disabled={disabled}
      types={['primary', 'input-appendage']}
      onClick={() => {
        const inputElement = document.getElementById(inputId);
        onClick(inputElement);
      }}
    >
      {buttonText}
    </Button>
  </div>
);

InputWithButton.defaultProps = {
  disabled: false
};

InputWithButton.propTypes = {
  inputId: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default InputWithButton;
