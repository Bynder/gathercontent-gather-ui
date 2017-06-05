import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactFormInput extends Component {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    focusOnMount: PropTypes.bool,
  };

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.input.focus();
    }
  }

  render () {
    return (
      <textarea
        className="form__input"
        ref={input => (this.input = input)}
        value={this.props.value}
        onChange={this.props.handleOnChange}
        placeholder="Reply..."
      />
    );
  }
}

export default ContactFormInput;
