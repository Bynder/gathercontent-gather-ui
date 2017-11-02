import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class ContactFormInput extends Component {
  static propTypes = {
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    submitting: PropTypes.bool.isRequired
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
    const additionalClasses = cx({
      'is-submitting': this.props.submitting
    });
    return (
      <textarea
        className={`comment-form__input ${additionalClasses}`}
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
