import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';

const InputWithButton = ({ value, buttonText, onClick, id, disabled }) => (
  <div className="input-with-button">
    <input
      readOnly
      id={id}
      value={value}
      className={cx('input-with-button__input', {
        'input-with-button__input--disabled': disabled
      })}
    />
    <Button
      disabled={disabled}
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

InputWithButton.defaultProps = {
  disabled: false
};

InputWithButton.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default InputWithButton;
