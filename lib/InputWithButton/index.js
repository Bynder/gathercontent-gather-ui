import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';

class InputWithButton extends Component {
  state = {
    hasBeenClicked: false
  };

  onClick = () => {
    const { inputId, onClick } = this.props;
    const inputElement = document.getElementById(inputId);

    this.setState({ hasBeenClicked: true });
    onClick(inputElement);
  };

  render() {
    const {
      value,
      buttonText,
      buttonTextAfterClick,
      inputId,
      buttonId,
      disabled
    } = this.props;

    const { hasBeenClicked } = this.state;

    return (
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
          onClick={this.onClick}
        >
          {buttonTextAfterClick && hasBeenClicked
            ? buttonTextAfterClick
            : buttonText}
        </Button>
      </div>
    );
  }
}

InputWithButton.defaultProps = {
  disabled: false,
  buttonTextAfterClick: null
};

InputWithButton.propTypes = {
  inputId: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonTextAfterClick: PropTypes.string,
  disabled: PropTypes.bool
};

export default InputWithButton;
