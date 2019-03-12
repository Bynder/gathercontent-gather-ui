import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Dropdown } from "..";
import ConfirmationDropdownContent from "./ConfirmationDropdownContent";

class ConfirmationDropdown extends Component {
  state = {
    promiseIsPending: false
  };

  hide = () => {
    if (this.props.hideOnCompletion) {
      this.setState({ promiseIsPending: false });
      this.props.onHide();
    }
  };

  onConfirm = () => {
    if (this.state.promiseIsPending) {
      return this;
    }

    this.setState({ promiseIsPending: true });
    return this.props
      .confirmationPromise()
      .then(this.hide)
      .catch(this.hide);
  };

  render() {
    const classNames = cx(`confirmation-dropdown ${this.props.className}`, {
      "is-pending": this.state.promiseIsPending
    });

    return (
      <Dropdown
        id={this.props.id}
        className={classNames}
        persistShow={this.state.promiseIsPending}
        onHide={this.hide}
        autoPosition
      >
        <ConfirmationDropdownContent
          {...this.props}
          {...this.state}
          onConfirm={this.onConfirm}
        >
          {this.props.dropdownContent}
        </ConfirmationDropdownContent>
        <Dropdown.Trigger>{this.props.children}</Dropdown.Trigger>
      </Dropdown>
    );
  }
}

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
  confirmationText: PropTypes.string
};

ConfirmationDropdown.defaultProps = {
  className: "",
  isDanger: false,
  disabled: false,
  hideOnCompletion: true,
  confirmationText: "Confirm",
  onHide: () => {}
};

export default ConfirmationDropdown;
