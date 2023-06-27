import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Form extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  handleKeyDown = e => {
    if (this.props.escToClose && e.keyCode === 27) {
      this.props.onCancel();
    }
  };

  render() {
    const {
      children,
      className,
      onSubmit,
      onCancel,
      escToClose,
      disabled,
      ...rest
    } = this.props;

    const classNames = cx(className, { 'form--disabled': disabled });

    return (
      <form onSubmit={this.handleSubmit} className={classNames} {...rest}>
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  className: PropTypes.string,
  escToClose: PropTypes.bool,
  disabled: PropTypes.bool
};

Form.defaultProps = {
  onCancel() {},
  className: '',
  escToClose: false,
  disabled: false
};

export default Form;
