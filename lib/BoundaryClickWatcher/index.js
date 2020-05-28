import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getElementPath = targetElement => {
  let path = [targetElement];

  const addParentToPath = element => {
    const { parentElement } = element;

    if (parentElement) {
      path = [...path, parentElement];
      return addParentToPath(parentElement);
    }

    return path;
  };

  return addParentToPath(targetElement);
};

class BoundaryClickWatcher extends Component {
  static propTypes = {
    insideClickHandler: PropTypes.func,
    outsideClickHandler: PropTypes.func,
    alwaysListen: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    BoundaryElement: PropTypes.string
  };

  static defaultProps = {
    insideClickHandler() {},
    outsideClickHandler() {},
    onMouseEnter() {},
    onMouseLeave() {},
    className: '',
    alwaysListen: false,
    BoundaryElement: 'div'
  };

  constructor(props) {
    super(props);
    this.state = {
      boundaryIsActive: false,
      boundaryIsFocussed: false,
      elementPath: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.addDocumentEventListener = this.addDocumentEventListener.bind(this);
    this.removeDocumentEventListener = this.removeDocumentEventListener.bind(
      this
    );
    this.handleInnerClick = this.handleInnerClick.bind(this);
    this.handleOuterClick = this.handleOuterClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    if (this.props.alwaysListen) {
      this.addDocumentEventListener();
    }
  }

  componentWillUnmount() {
    this.removeDocumentEventListener();
  }

  handleMouseDown = ({ target }) => {
    this.setState({ elementPath: getElementPath(target) });
  };

  addDocumentEventListener() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('mousedown', this.handleMouseDown);
  }

  removeDocumentEventListener() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('mousedown', this.handleMouseDown);
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
    const { target } = event;
    const {
      container,
      state: { elementPath }
    } = this;

    const targetIsContainer = target === container;
    const elementPathContainsContainer = elementPath.indexOf(container) !== -1;
    const containerContainsFocus =
      container && container.contains(document.activeElement);

    const userHasClickedOutside =
      !targetIsContainer &&
      !elementPathContainsContainer &&
      !containerContainsFocus;

    if (userHasClickedOutside) {
      this.handleOuterClick(event);
    }
  }

  handleBlur(e) {
    this.setState({
      boundaryIsFocussed: e.target === this.container && false
    });
  }

  handleFocus(e) {
    this.setState({
      boundaryIsFocussed: e.target === this.container
    });
  }

  render() {
    const {
      children,
      className,
      onMouseEnter,
      onMouseLeave,
      BoundaryElement
    } = this.props;
    const { boundaryIsActive, boundaryIsFocussed } = this.state;

    return (
      <BoundaryElement
        tabIndex={0}
        role="button"
        ref={el => {
          this.container = el;
        }}
        onClick={this.handleInnerClick}
        onKeyPress={this.handleInnerClick}
        className={`boundary-click-watcher ${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
      >
        {typeof children === 'function'
          ? children(boundaryIsActive, boundaryIsFocussed)
          : children}
      </BoundaryElement>
    );
  }
}

export default BoundaryClickWatcher;
