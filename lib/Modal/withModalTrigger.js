import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../';

export default function (buttonProps) {
  class withModalTrigger extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
    };

    constructor(props) {
      super(props);
      this.state = { show: false };
      this.showModal = this.showModal.bind(this);
      this.onHide = this.onHide.bind(this);
    }

    onHide() {
      this.setState({ show: false });
    }

    showModal() {
      this.setState({ show: true });
    }

    render() {
      return (
        <div>
          <Button
            {...buttonProps}
            clickHandler={this.showModal}
          />
          {React.Children.map(this.props.children, child => (
            React.cloneElement(child, {
              ...this.state,
              onHide: this.onHide,
            })
          ))}
        </div>
      );
    }
  }

  return withModalTrigger;
}
