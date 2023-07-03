import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export class Form extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    // @ts-expect-error TS(2339): Property 'onSubmit' does not exist on type 'Readon... Remove this comment to see the full error message
    this.props.onSubmit(e);
  };

  handleKeyDown = (e: any) => {
    // @ts-expect-error TS(2339): Property 'escToClose' does not exist on type 'Read... Remove this comment to see the full error message
    if (this.props.escToClose && e.keyCode === 27) {
      // @ts-expect-error TS(2339): Property 'onCancel' does not exist on type 'Readon... Remove this comment to see the full error message
      this.props.onCancel();
    }
  };

  render() {
    const {
      children,
      // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
      className,
      // @ts-expect-error TS(2339): Property 'onSubmit' does not exist on type 'Readon... Remove this comment to see the full error message
      onSubmit,
      // @ts-expect-error TS(2339): Property 'onCancel' does not exist on type 'Readon... Remove this comment to see the full error message
      onCancel,
      // @ts-expect-error TS(2339): Property 'escToClose' does not exist on type 'Read... Remove this comment to see the full error message
      escToClose,
      // @ts-expect-error TS(2339): Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled,
      ...rest
    } = this.props;

    const classNames = cx(className, { "form--disabled": disabled });

    return (
      <form onSubmit={this.handleSubmit} className={classNames} {...rest}>
        {children}
      </form>
    );
  }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  className: PropTypes.string,
  escToClose: PropTypes.bool,
  disabled: PropTypes.bool,
};

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Form.defaultProps = {
  onCancel() {},
  className: "",
  escToClose: false,
  disabled: false,
};

export default Form;
