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
      disabled,
      paddingSmall
    } = this.props;

    const { hasBeenClicked } = this.state;
    const wrapperClasses = cx('input-with-button', {
      'input-with-button--padding-small': paddingSmall
    });
    const inputClasses = cx('input-with-button__input', {
      'input-with-button__input--disabled': disabled
    });
    return (
      <div className={wrapperClasses}>
        <input
          readOnly
          id={inputId}
          aria-labelledby={buttonId}
          value={value}
          className={inputClasses}
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
  buttonTextAfterClick: null,
  paddingSmall: false
};

InputWithButton.propTypes = {
  inputId: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonTextAfterClick: PropTypes.string,
  disabled: PropTypes.bool,
  paddingSmall: PropTypes.bool
};

export default InputWithButton;
