import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "../index";
import { GATHER_UI_DROPDOWN } from "./index";

class DropdownTrigger extends Component {
  handleClick = () => {
    const { toggleShowContent, autoPosition } = this.context[
      GATHER_UI_DROPDOWN
    ];
    if (this.trigger && autoPosition) {
      const bounds = this.trigger.getBoundingClientRect();
      return toggleShowContent(bounds);
    }
    return toggleShowContent();
  };

  render() {
    const { children, useButton, ...rest } = this.props;
    return useButton ? (
      <div
        ref={trigger => {
          this.trigger = trigger;
        }}
        className="dropdown__trigger-wrapper"
      >
        <Button {...this.props} clickHandler={this.handleClick}>
          {children}
        </Button>
      </div>
    ) : (
      <button
        type="button"
        {...rest}
        className="dropdown__trigger"
        onClick={this.handleClick}
        ref={trigger => {
          this.trigger = trigger;
        }}
      >
        {children}
      </button>
    );
  }
}

DropdownTrigger.contextTypes = {
  GATHER_UI_DROPDOWN: PropTypes.shape().isRequired
};

DropdownTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  useButton: PropTypes.bool
};

DropdownTrigger.defaultProps = {
  useButton: false
};

export default DropdownTrigger;
