import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class ContactFormInput extends Component {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    focusOnMount: PropTypes.bool.isRequired,
    value: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: ''
  };

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.input.focus();
    }
  }

  render() {
    const additionalClasses = cx({
      'is-submitting': this.props.isSubmitting
    });
    return (
      <textarea
        className={`comment-form__input ${additionalClasses}`}
        ref={input => {
          this.input = input;
        }}
        value={this.props.value}
        onChange={this.props.handleOnChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default ContactFormInput;
