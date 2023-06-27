import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Label from "../Label";

class Other extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    onTextChangeHandler: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    value: "",
    checked: false,
    disabled: false,
  };

  input: any;

  componentDidUpdate(prevProps: any) {
    // @ts-expect-error TS(2339): Property 'checked' does not exist on type 'Readonl... Remove this comment to see the full error message
    const checkedHasChanged = prevProps.checked !== this.props.checked;

    // @ts-expect-error TS(2339): Property 'checked' does not exist on type 'Readonl... Remove this comment to see the full error message
    if (checkedHasChanged && this.props.checked && this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      // @ts-expect-error TS(2339): Property 'label' does not exist on type 'Readonly<... Remove this comment to see the full error message
      label,
      // @ts-expect-error TS(2339): Property 'onChangeHandler' does not exist on type ... Remove this comment to see the full error message
      onChangeHandler,
      // @ts-expect-error TS(2339): Property 'onTextChangeHandler' does not exist on t... Remove this comment to see the full error message
      onTextChangeHandler,
      // @ts-expect-error TS(2339): Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled,
      ...rest
    } = this.props;

    // @ts-expect-error TS(2339): Property 'checked' does not exist on type '{ child... Remove this comment to see the full error message
    if (rest.checked) {
      return (
        <div className="form__choice-element-wrapper">
          {/* @ts-expect-error TS(2739): Type '{ disabled: any; onChangeHandler: any; child... Remove this comment to see the full error message */}
          <Input
            {...rest}
            disabled={disabled}
            onChangeHandler={onChangeHandler}
          />
          {disabled ? (
            <span className="form-radiobutton__other">{label}</span>
          ) : (
            <input
              ref={(input) => {
                this.input = input;
              }}
              className="form-radiobutton__other"
              type="text"
              // @ts-expect-error TS(2339): Property 'id' does not exist on type '{ children?:... Remove this comment to see the full error message
              id={`other-value-${rest.id}`}
              // @ts-expect-error TS(2339): Property 'value' does not exist on type '{ childre... Remove this comment to see the full error message
              value={rest.value}
              onChange={onTextChangeHandler}
              placeholder={label}
            />
          )}
        </div>
      );
    }

    return (
      <div className="form__choice-element-wrapper">
        {/* @ts-expect-error TS(2739): Type '{ onChangeHandler: any; className: string; d... Remove this comment to see the full error message */}
        <Input
          {...rest}
          onChangeHandler={onChangeHandler}
          className="form-radiobutton--invisible"
          disabled={disabled}
        />
        <Label
          label={label}
          // @ts-expect-error TS(2339): Property 'id' does not exist on type '{ children?:... Remove this comment to see the full error message
          id={rest.id}
          className="form-checkbox__label--other-option"
          disabled={disabled}
        />
      </div>
    );
  }
}

export default Other;
