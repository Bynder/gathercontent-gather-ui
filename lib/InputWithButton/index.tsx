import React, { Component } from "react";
import cx from "classnames";
import Button from "../Button";

export class InputWithButton extends Component {
  state = {
    hasBeenClicked: false,
  };

  onClick = () => {
    // @ts-expect-error TS(2339): Property 'inputId' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { inputId, onClick } = this.props;
    const inputElement = document.getElementById(inputId);

    this.setState({ hasBeenClicked: true });
    onClick(inputElement);
  };

  render() {
    const {
      // @ts-expect-error TS(2339): Property 'value' does not exist on type 'Readonly<... Remove this comment to see the full error message
      value,
      // @ts-expect-error TS(2339): Property 'buttonText' does not exist on type 'Read... Remove this comment to see the full error message
      buttonText,
      // @ts-expect-error TS(2339): Property 'buttonTextAfterClick' does not exist on ... Remove this comment to see the full error message
      buttonTextAfterClick,
      // @ts-expect-error TS(2339): Property 'inputId' does not exist on type 'Readonl... Remove this comment to see the full error message
      inputId,
      // @ts-expect-error TS(2339): Property 'buttonId' does not exist on type 'Readon... Remove this comment to see the full error message
      buttonId,
      // @ts-expect-error TS(2339): Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled,
      // @ts-expect-error TS(2339): Property 'paddingSmall' does not exist on type 'Re... Remove this comment to see the full error message
      paddingSmall,
    } = this.props;

    const { hasBeenClicked } = this.state;
    const wrapperClasses = cx("input-with-button", {
      "input-with-button--padding-small": paddingSmall,
    });
    const inputClasses = cx("input-with-button__input", {
      "input-with-button__input--disabled": disabled,
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
          types={["primary", "input-appendage"]}
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

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
InputWithButton.defaultProps = {
  disabled: false,
  buttonTextAfterClick: null,
  paddingSmall: false,
};

export default InputWithButton;
