import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Label from '../Label';

class Other extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    onTextChangeHandler: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    value: '',
    checked: false,
    disabled: false
  };

  componentDidUpdate(prevProps) {
    const checkedHasChanged = prevProps.checked !== this.props.checked;

    if (checkedHasChanged && this.props.checked && this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      label,
      onChangeHandler,
      onTextChangeHandler,
      disabled,
      ...rest
    } = this.props;

    if (rest.checked) {
      return (
        <div className="form__choice-element-wrapper">
          <Input
            {...rest}
            disabled={disabled}
            onChangeHandler={onChangeHandler}
          />
          {disabled ? (
            <span className="form-radiobutton__other">{label}</span>
          ) : (
            <input
              ref={input => {
                this.input = input;
              }}
              className="form-radiobutton__other"
              type="text"
              id={`other-value-${rest.id}`}
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
        <Input
          {...rest}
          onChangeHandler={onChangeHandler}
          className="form-radiobutton--invisible"
          disabled={disabled}
        />
        <Label
          label={label}
          id={rest.id}
          className="form-checkbox__label--other-option"
          disabled={disabled}
        />
      </div>
    );
  }
}

export default Other;
