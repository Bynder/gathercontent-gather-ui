import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoundaryClickWatcher extends Component {
  static propTypes = {
    insideClickHandler: PropTypes.func,
    outsideClickHandler: PropTypes.func,
    alwaysListen: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    ignoreClass: PropTypes.string,
    BoundaryElement: PropTypes.string
  };

  static defaultProps = {
    insideClickHandler() {},
    outsideClickHandler() {},
    onMouseEnter() {},
    onMouseLeave() {},
    className: '',
    alwaysListen: false,
    ignoreClass: null,
    BoundaryElement: 'div'
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

  componentDidMount() {
    if (this.props.alwaysListen) {
      this.addDocumentEventListener();
    }
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
    if (typeof this.props.children === 'function') {
      this.setState({ boundaryIsActive: true });
    }
    if (!this.props.alwaysListen) {
      this.addDocumentEventListener();
    }
  }

  handleOuterClick(event) {
    this.props.outsideClickHandler(event);
    if (typeof this.props.children === 'function') {
      this.setState({ boundaryIsActive: false });
    }
    if (!this.props.alwaysListen) {
      this.removeDocumentEventListener();
    }
  }

  handleClick(event) {
    const targetIsContainer = event.target !== this.container;
    let containerDoesNotContainTarget = false;
    let containerDoesNotContainFocus = false;
    let targetHasIgnoreClass = false;
    if (this.container) {
      containerDoesNotContainTarget = !this.container.contains(event.target);
      containerDoesNotContainFocus = !this.container.contains(
        document.activeElement
      );
    }
    if (this.props.ignoreClass) {
      targetHasIgnoreClass = event.target.classList.contains(
        this.props.ignoreClass
      );
    }
    const userHasClickedOutside =
      targetIsContainer &&
      containerDoesNotContainTarget &&
      containerDoesNotContainFocus &&
      !targetHasIgnoreClass;

    if (userHasClickedOutside) {
      this.handleOuterClick(event);
    }
  }

  render() {
    const {
      children,
      className,
      onMouseEnter,
      onMouseLeave,
      BoundaryElement
    } = this.props;
    const { boundaryIsActive } = this.state;

    return (
      <BoundaryElement
        role="button"
        tabIndex={-1}
        ref={el => {
          this.container = el;
        }}
        onClick={this.handleInnerClick}
        onKeyPress={this.handleInnerClick}
        className={`boundary-click-watcher ${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {typeof children === 'function' ? children(boundaryIsActive) : children}
      </BoundaryElement>
    );
  }
}

export default BoundaryClickWatcher;
