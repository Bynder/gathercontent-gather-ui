import React, { Component, Fragment } from 'react';
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
    noBorder: PropTypes.bool,
    collapse: PropTypes.bool,
    fullWidth: PropTypes.bool,
    paddingSmall: PropTypes.bool,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    type: 'text',
    focusOnMount: false,
    value: '',
    placeholder: '',
    className: '',
    onInputChange: () => {},
    noBorder: false,
    paddingSmall: false,
    fullWidth: false,
    hasError: false,
    errorMessage: '',
    disabled: false,
    collapse: false
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
      fullWidth,
      paddingSmall,
      hasError,
      errorMessage,
      disabled,
      collapse,
      ...rest
    } = this.props;
    const inputValue = this.state.value;

    const classNames = cx(`form__input ${className}`, {
      'form__input--noborder': noBorder,
      'form__input--full-width': fullWidth,
      'form__input--padding-small': paddingSmall,
      'form__input--has-error': hasError,
      'form__input--display-error': hasError && errorMessage,
      'form__input--collapse': collapse
    });

    return (
      <Fragment>
        <input
          type={type}
          value={inputValue}
          onChange={this.handleOnChange}
          className={classNames}
          placeholder={placeholder}
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
      </Fragment>
    );
  }
}

export default FormInput;
