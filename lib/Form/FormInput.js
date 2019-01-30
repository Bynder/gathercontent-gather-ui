import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class FormInput extends Component {
  static propTypes = {
    type: PropTypes.string,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onInputChange: PropTypes.func,
    noBorder: PropTypes.bool
  };

  static defaultProps = {
    type: 'text',
    focusOnMount: false,
    value: '',
    placeholder: '',
    className: '',
    onInputChange: () => {},
    noBorder: false
  };

  constructor(props) {
    super();
    this.state = {
      value: props.value || ''
    };
  }

  handleOnChange = e => {
    this.setState({ value: e.target.value });
    this.props.onInputChange(e.target.value);
  };

  render() {
    const {
      type,
      className,
      placeholder,
      noBorder,
      focusOnMount,
      onInputChange,
      value,
      ...rest
    } = this.props;
    const inputValue = this.state.value;

    const classNames = cx(`form__input ${className}`, {
      'form__input--noborder': noBorder
    });

    return (
      <input
        type={type}
        value={inputValue}
        onChange={this.handleOnChange}
        className={classNames}
        placeholder={placeholder}
        autoFocus={this.props.focusOnMount} // eslint-disable-line jsx-a11y/no-autofocus
        {...rest}
      />
    );
  }
}

export default FormInput;
