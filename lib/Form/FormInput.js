import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  static propTypes = {
    type: PropTypes.string,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    focusOnMount: false,
    value: '',
    className: ''
  };

  constructor(props) {
    super();
    this.state = {
      value: props.value || ''
    };
  }

  handleOnChange = e => this.setState({ value: e.target.value });

  render() {
    const { type, className } = this.props;
    const value = this.state.value;

    return (
      <input
        type={type}
        value={value}
        onChange={this.handleOnChange}
        className={`form__input ${className}`}
        autoFocus={this.props.focusOnMount} // eslint-disable-line jsx-a11y/no-autofocus
      />
    );
  }
}

export default FormInput;
