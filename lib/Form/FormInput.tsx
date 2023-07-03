import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export class FormInput extends Component {
  static propTypes = {
    type: PropTypes.string,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onInputChange: PropTypes.func,
    noBorder: PropTypes.bool,
    collapse: PropTypes.bool,
    fullWidth: PropTypes.bool,
    paddingSmall: PropTypes.bool,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    type: "text",
    focusOnMount: false,
    value: "",
    placeholder: "",
    className: "",
    onInputChange: () => {},
    noBorder: false,
    paddingSmall: false,
    fullWidth: false,
    hasError: false,
    errorMessage: "",
    disabled: false,
    collapse: false,
  };

  constructor(props: any) {
    // @ts-expect-error TS(2554): Expected 1-2 arguments, but got 0.
    super();
    this.state = {
      value: props.value || "",
    };
  }

  handleOnChange = (e: any) => {
    this.setState({ value: e.target.value });
    // @ts-expect-error TS(2339): Property 'onInputChange' does not exist on type 'R... Remove this comment to see the full error message
    this.props.onInputChange(e.target.value);
  };

  render() {
    const {
      // @ts-expect-error TS(2339): Property 'type' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      type,
      // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
      className,
      // @ts-expect-error TS(2339): Property 'placeholder' does not exist on type 'Rea... Remove this comment to see the full error message
      placeholder,
      // @ts-expect-error TS(2339): Property 'noBorder' does not exist on type 'Readon... Remove this comment to see the full error message
      noBorder,
      // @ts-expect-error TS(2339): Property 'focusOnMount' does not exist on type 'Re... Remove this comment to see the full error message
      focusOnMount,
      // @ts-expect-error TS(2339): Property 'onInputChange' does not exist on type 'R... Remove this comment to see the full error message
      onInputChange,
      // @ts-expect-error TS(2339): Property 'value' does not exist on type 'Readonly<... Remove this comment to see the full error message
      value,
      // @ts-expect-error TS(2339): Property 'fullWidth' does not exist on type 'Reado... Remove this comment to see the full error message
      fullWidth,
      // @ts-expect-error TS(2339): Property 'paddingSmall' does not exist on type 'Re... Remove this comment to see the full error message
      paddingSmall,
      // @ts-expect-error TS(2339): Property 'hasError' does not exist on type 'Readon... Remove this comment to see the full error message
      hasError,
      // @ts-expect-error TS(2339): Property 'errorMessage' does not exist on type 'Re... Remove this comment to see the full error message
      errorMessage,
      // @ts-expect-error TS(2339): Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled,
      // @ts-expect-error TS(2339): Property 'collapse' does not exist on type 'Readon... Remove this comment to see the full error message
      collapse,
      ...rest
    } = this.props;
    // @ts-expect-error TS(2339): Property 'value' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const inputValue = this.state.value;

    const classNames = cx(`form__input ${className}`, {
      "form__input--noborder": noBorder,
      "form__input--full-width": fullWidth,
      "form__input--padding-small": paddingSmall,
      "form__input--has-error": hasError,
      "form__input--display-error": hasError && errorMessage,
      "form__input--collapse": collapse,
    });

    return (
      <>
        <input
          type={type}
          value={inputValue}
          onChange={this.handleOnChange}
          className={classNames}
          placeholder={placeholder}
          // @ts-expect-error TS(2339): Property 'focusOnMount' does not exist on type 'Re... Remove this comment to see the full error message
          autoFocus={this.props.focusOnMount} // eslint-disable-line jsx-a11y/no-autofocus
          aria-invalid={hasError}
          disabled={disabled}
          {...rest}
        />
        {hasError && errorMessage && (
          <span role="alert" className="form-input__error-message">
            {errorMessage}
          </span>
        )}
      </>
    );
  }
}

export default FormInput;
