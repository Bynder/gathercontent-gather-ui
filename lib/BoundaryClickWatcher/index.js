import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoundaryClickWatcher extends Component {
  static propTypes = {
    initialClickHandler: PropTypes.func.isRequired,
    outsideClickHandler: PropTypes.func.isRequired,
    children: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.addDocumentEventListener = this.addDocumentEventListener.bind(this);
    this.removeDocumentEventListener = this.removeDocumentEventListener.bind(this);
    this.handleInitialClick = this.handleInitialClick.bind(this);
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

  handleInitialClick() {
    this.props.initialClickHandler();
    this.addDocumentEventListener();
  }

  handleOuterClick(event) {
    this.props.outsideClickHandler(event);
    this.removeDocumentEventListener();
  }

  handleClick(event) {
    const targetIsContainer = event.target !== this.container;
    const containerDoesNotContainTarget = !this.container.contains(event.target);
    const containerDoesNotContainFocus = !this.container.contains(document.activeElement);
    const userHasClickedOutside = targetIsContainer && containerDoesNotContainTarget && containerDoesNotContainFocus;

    if (userHasClickedOutside) {
      this.handleOuterClick(event);
    }
  }

  render() {
    return (
      <div
        ref={el => (this.container = el)}
        onClick={this.handleInitialClick}
      >
        {this.props.children}
      </div>
    );
  }
}

export default BoundaryClickWatcher;
