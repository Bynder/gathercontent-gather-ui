import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactFormInput extends Component {
  static propTypes = {
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    submitted: PropTypes.bool.isRequired
  };

  static defaultProps = {
    focusOnMount: false,
    value: ''
  };

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.input.focus();
    }
  }

  render() {
    const isSubmittedClass = this.props.submitted ? 'is-submitted' : '';
    return (
      <textarea
        className={`comment-form__input ${isSubmittedClass}`}
        ref={input => {
          this.input = input;
        }}
        value={this.props.value}
        onChange={this.props.handleOnChange}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        placeholder="Reply..."
      />
    );
  }
}

export default ContactFormInput;
