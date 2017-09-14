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
  };

  static defaultProps = {
    value: '',
    checked: false,
  };

  render() {
    const { name, value, id, checked, label, onChangeHandler, onTextChangeHandler } = this.props;

    if (checked) {
      return (
        <div className="form__choice-element-wrapper">
          <Input
            name={name}
            id={id}
            checked={checked}
            value={value}
            onChangeHandler={onChangeHandler}
          />
          <input
            className="form-radiobutton__other"
            type="text"
            id={`other-value-${id}`}
            value={value}
            onChange={onTextChangeHandler}
            autoFocus
            placeholder={label}
          />
        </div>
      );
    }

    return (
      <div className="form__choice-element-wrapper">
        <Input
          name={name}
          id={id}
          checked={checked}
          value={value}
          onChangeHandler={onChangeHandler}
          className="form-radiobutton--invisible"
        />
        <Label
          label={label}
          id={id}
          className="form-checkbox__label--other-option"
        />

      </div>
    );
  }
}

export default Other;
