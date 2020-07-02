import React, { createContext, useEffect, useRef, useState } from 'react';
import { func, bool, string, number, oneOfType, node } from 'prop-types';

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

const addDocumentEventListener = (handleClick, handleMouseDown) => {
  document.addEventListener('click', handleClick);
  document.addEventListener('mousedown', handleMouseDown);
};

const removeDocumentEventListener = (handleClick, handleMouseDown) => {
  document.removeEventListener('click', handleClick);
  document.removeEventListener('mousedown', handleMouseDown);
};

const BoundaryClickWatcherContext = createContext({});

function BoundaryClickWatcher(props) {
  const [boundaryIsActive, setBoundaryIsActive] = useState(props.isActive);
  const [boundaryIsFocussed, setBoundaryIsFocussed] = useState(
    props.isFocussed
  );
  const [clickedElementPath, setClickedElementPath] = useState([]);
  const containerRef = useRef();

  const handleBlur = e => {
    setBoundaryIsFocussed(e.target === containerRef.current && false);
  };

  const handleFocus = e => {
    setBoundaryIsFocussed(e.target === containerRef.current);
  };

  const handleInnerClick = () => {
    props.insideClickHandler();

    if (typeof props.children === 'function') {
      setBoundaryIsActive(true);
    }
  };

  const handleOuterClick = event => {
    props.outsideClickHandler(event);

    if (typeof props.children === 'function') {
      setBoundaryIsActive(false);
    }
  };

  const handleMouseDown = ({ target }) => {
    setClickedElementPath(getElementPath(target));
  };

  const handleClick = event => {
    const { target } = event;
    const targetIsContainer = target === containerRef.current;
    const elementPathContainsContainer =
      clickedElementPath.indexOf(containerRef.current) !== -1;
    const containerContainsFocus =
      containerRef.current &&
      containerRef.current.contains(document.activeElement);

    const userHasClickedOutside =
      !targetIsContainer &&
      !elementPathContainsContainer &&
      !containerContainsFocus;

    if (userHasClickedOutside) {
      handleOuterClick(event);
    }
  };

  useEffect(() => {
    if (!props.alwaysListen) {
      if (boundaryIsActive) {
        addDocumentEventListener(handleClick, handleMouseDown);
      }

      if (!boundaryIsActive) {
        removeDocumentEventListener(handleClick, handleMouseDown);
      }
    }
  }, [boundaryIsActive]);

  useEffect(() => {
    if (props.alwaysListen) {
      addDocumentEventListener(handleClick, handleMouseDown);
    }

    return () => {
      if (props.alwaysListen) {
        removeDocumentEventListener(handleClick, handleMouseDown);
      }
    };
  }, []);

  const { BoundaryElement } = props;

  const sharedContext = {
    boundaryIsActive,
    boundaryIsFocussed,
    clickedElementPath,
    containerRef
  };

  return (
    <BoundaryClickWatcherContext.Provider value={sharedContext}>
      <BoundaryElement
        tabIndex={props.tabIndex}
        role="button"
        ref={el => {
          containerRef.current = el;
        }}
        onClick={handleInnerClick}
        onKeyPress={handleInnerClick}
        className={`boundary-click-watcher ${props.className}`}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        {typeof props.children === 'function'
          ? props.children(boundaryIsActive, boundaryIsFocussed)
          : props.children}
      </BoundaryElement>
    </BoundaryClickWatcherContext.Provider>
  );
}

BoundaryClickWatcher.propTypes = {
  insideClickHandler: func,
  outsideClickHandler: func,
  alwaysListen: bool,
  isActive: bool,
  isFocussed: bool,
  className: string,
  children: oneOfType([node, func]).isRequired,
  onMouseEnter: func,
  onMouseLeave: func,
  BoundaryElement: string,
  tabIndex: number
};

BoundaryClickWatcher.defaultProps = {
  insideClickHandler() {},
  outsideClickHandler() {},
  onMouseEnter() {},
  onMouseLeave() {},
  className: '',
  alwaysListen: false,
  isActive: false,
  isFocussed: false,
  BoundaryElement: 'div',
  tabIndex: 0
};

export default BoundaryClickWatcher;
