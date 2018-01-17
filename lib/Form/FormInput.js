import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  static propTypes = {
    type: PropTypes.string,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    focusOnMount: false,
    value: ''
  };

  constructor(props) {
    super();
    this.state = {
      value: props.value || ''
    };
  }

  handleOnChange = e =>
    this.setState({ value: e.target.value });

  render() {
    const { type } = this.props;
    const value = this.state.value;

    return (
      <input
        type={type}
        value={value}
        onChange={this.handleOnChange}
        autoFocus={this.props.focusOnMount}
      />
    )
  }
}

export default FormInput;
