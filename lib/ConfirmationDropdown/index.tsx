import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Dropdown from "../Dropdown";
import ConfirmationDropdownContent from "./ConfirmationDropdownContent";

class ConfirmationDropdown extends Component {
  state = {
    promiseIsPending: false,
  };

  hide = () => {
    // @ts-expect-error TS(2339): Property 'hideOnCompletion' does not exist on type... Remove this comment to see the full error message
    if (this.props.hideOnCompletion) {
      this.setState({ promiseIsPending: false });
      // @ts-expect-error TS(2339): Property 'onHide' does not exist on type 'Readonly... Remove this comment to see the full error message
      this.props.onHide();
    }
  };

  onConfirm = () => {
    if (this.state.promiseIsPending) {
      return this;
    }

    this.setState({ promiseIsPending: true });
    return (
      this.props
        // @ts-expect-error TS(2339): Property 'confirmationPromise' does not exist on t... Remove this comment to see the full error message
        .confirmationPromise()
        .then(this.hide)
        .catch(this.hide)
    );
  };

  render() {
    // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
    const classNames = cx(`confirmation-dropdown ${this.props.className}`, {
      "is-pending": this.state.promiseIsPending,
      // @ts-expect-error TS(2339): Property 'isDanger' does not exist on type 'Readon... Remove this comment to see the full error message
      "confirmation-dropdown--is-dangerous": this.props.isDanger,
    });

    // @ts-expect-error TS(2339): Property 'position' does not exist on type 'Readon... Remove this comment to see the full error message
    const { autoPosition, ...position } = this.props.position;

    return (
      <Dropdown
        // @ts-expect-error TS(2339): Property 'id' does not exist on type 'Readonly<{}>... Remove this comment to see the full error message
        id={this.props.id}
        className={classNames}
        persistShow={this.state.promiseIsPending}
        onHide={this.hide}
        autoPosition={autoPosition}
      >
        <ConfirmationDropdownContent
          {...this.props}
          {...this.state}
          {...position}
          onConfirm={this.onConfirm}
          // @ts-expect-error TS(2339): Property 'onCompletion' does not exist on type 'Re... Remove this comment to see the full error message
          onCompletion={this.props.onCompletion}
        >
          {/* @ts-expect-error TS(2339): Property 'dropdownContent' does not exist on type ... Remove this comment to see the full error message */}
          {this.props.dropdownContent}
        </ConfirmationDropdownContent>
        {/* @ts-expect-error TS(2339): Property 'id' does not exist on type 'Readonly<{}>... Remove this comment to see the full error message */}
        <Dropdown.Trigger data-testid={`${this.props.id}-trigger`}>
          {this.props.children}
        </Dropdown.Trigger>
      </Dropdown>
    );
  }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ConfirmationDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dropdownContent: PropTypes.node.isRequired,
  confirmationPromise: PropTypes.func.isRequired,
  onHide: PropTypes.func,
  hideOnCompletion: PropTypes.bool,
  className: PropTypes.string,
  isDanger: PropTypes.bool,
  disabled: PropTypes.bool,
  confirmationText: PropTypes.string,
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  position: PropTypes.shape(),
  onCancel: PropTypes.func,
  secondaryAction: PropTypes.node,
  onCompletion: PropTypes.func,
};

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
ConfirmationDropdown.defaultProps = {
  className: "",
  isDanger: false,
  disabled: false,
  hideOnCompletion: true,
  confirmationText: "Confirm",
  onHide: () => {},
  position: {
    autoPosition: true,
  },
  onCancel: () => {},
  secondaryAction: null,
  onCompletion: () => {},
};

export default ConfirmationDropdown;
