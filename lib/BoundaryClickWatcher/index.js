import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoundaryClickWatcher extends Component {
  static propTypes = {
    insideClickHandler: PropTypes.func,
    outsideClickHandler: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  };

  static defaultProps = {
    insideClickHandler() {},
    outsideClickHandler() {}
  };

  constructor(props) {
    super(props);
    this.state = { boundaryIsActive: false };
    this.handleClick = this.handleClick.bind(this);
    this.addDocumentEventListener = this.addDocumentEventListener.bind(this);
    this.removeDocumentEventListener = this.removeDocumentEventListener.bind(
      this
    );
    this.handleInnerClick = this.handleInnerClick.bind(this);
    this.handleOuterClick = this.handleOuterClick.bind(this);
  }

  componentWillUnmount() {
    this.removeDocumentEventListener();
  }

  addDocumentEventListener() {
    document.addEventListener('click', this.handleClick);
  }

  removeDocumentEventListener() {
    document.removeEventListener('click', this.handleClick);
  }

  handleInnerClick() {
    this.props.insideClickHandler();
    this.setState({ boundaryIsActive: true });
    this.addDocumentEventListener();
  }

  handleOuterClick(event) {
    this.props.outsideClickHandler(event);
    this.setState({ boundaryIsActive: false });
    this.removeDocumentEventListener();
  }

  handleClick(event) {
    const targetIsContainer = event.target !== this.container;
    const containerDoesNotContainTarget = !this.container.contains(
      event.target
    );
    const containerDoesNotContainFocus = !this.container.contains(
      document.activeElement
    );
    const userHasClickedOutside =
      targetIsContainer &&
      containerDoesNotContainTarget &&
      containerDoesNotContainFocus;

    if (userHasClickedOutside) {
      this.handleOuterClick(event);
    }
  }

  render() {
    return (
      <div
        role="button"
        tabIndex={-1}
        ref={el => {
          this.container = el;
        }}
        onClick={this.handleInnerClick}
        onKeyPress={this.handleInnerClick}
      >
        {typeof this.props.children === 'function'
          ? this.props.children(this.state.boundaryIsActive)
          : this.props.children
        }
      </div>
    );
  }
}

export default BoundaryClickWatcher;
