import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getElementPath = targetElement => {
  let path = [targetElement];

  const addParentToPath = element => {
    const {parentElement} = element;

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
    this.state = { boundaryIsActive: false, elementPath: [] };
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
    const { ignoreClass } = this.props;
    const { target } = event;

    const targetIsContainer = target === this.container;
    const elementPathContainsContainer =
      this.container && this.state.elementPath.indexOf(this.container) !== -1;
    const containerContainsFocus =
      this.container && this.container.contains(document.activeElement);

    const ignoreClasses = ignoreClass ? ignoreClass.match(/\S+/g) : [];
    const targetHasIgnoreClass = ignoreClasses.some(className =>
      target.classList.contains(className)
    );

    const userHasClickedOutside =
      !targetIsContainer &&
      !elementPathContainsContainer &&
      !containerContainsFocus &&
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
