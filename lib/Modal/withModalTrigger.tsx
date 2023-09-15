import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

export function withModalTrigger(buttonProps: any) {
  class withModalTriggerComponent extends Component {
    constructor(props: any) {
      super(props);
      this.state = { show: false };
      this.showModal = this.showModal.bind(this);
      this.onHide = this.onHide.bind(this);
    }

    static propTypes = {
      children: PropTypes.node.isRequired,
    };

    onHide() {
      this.setState({ show: false });
    }

    showModal() {
      this.setState({ show: true });
    }

    render() {
      return (
        <div>
          <Button {...buttonProps} clickHandler={this.showModal} />
          {/* @ts-expect-error Property 'children' does not exist on type 'Readonly<{}>'.ts(2339) */}
          {React.Children.map(this.props.children, (child: any) =>
            React.cloneElement(child, {
              ...this.state,
              onHide: this.onHide,
            })
          )}
        </div>
      );
    }
  }

  return withModalTriggerComponent;
}
