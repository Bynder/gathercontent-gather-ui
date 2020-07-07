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

const addDocumentEventListener = handleClick => {
  document.addEventListener('click', handleClick);
};

const removeDocumentEventListener = handleClick => {
  document.removeEventListener('click', handleClick);
};

const BoundaryClickWatcherContext = createContext({});

function BoundaryClickWatcher(props) {
  const [boundaryIsActive, setBoundaryIsActive] = useState(props.isActive);
  const [boundaryIsFocussed, setBoundaryIsFocussed] = useState(
    props.isFocussed
  );
  const containerRef = useRef();

  const handleBlur = e => {
    setBoundaryIsFocussed(e.target === containerRef.current && false);
  };

  const handleFocus = e => {
    setBoundaryIsFocussed(e.target === containerRef.current);
  };

  const handleInnerClick = () => {
    props.insideClickHandler();
    setBoundaryIsActive(true);
  };

  const handleOuterClick = event => {
    props.outsideClickHandler(event);
    setBoundaryIsActive(false);
  };

  const handleClick = event => {
    const { target } = event;

    const targetIsContainer = target === containerRef.current;

    const path = getElementPath(target);

    const elementPathContainsContainer =
      path.indexOf(containerRef.current) !== -1;

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
    setBoundaryIsActive(props.isActive);
  }, [props.isActive]);

  const createConditionalEventListeners = () => {
    if (!props.alwaysListen) {
      if (boundaryIsActive) {
        addDocumentEventListener(handleClick);
      }

      if (!boundaryIsActive) {
        removeDocumentEventListener(handleClick);
      }
    }
  };
  useEffect(createConditionalEventListeners, [boundaryIsActive]);

  const createPersistentEventListeners = () => {
    if (props.alwaysListen) {
      addDocumentEventListener(handleClick);
    }

    return () => {
      if (props.alwaysListen) {
        removeDocumentEventListener(handleClick);
      }
    };
  };
  useEffect(createPersistentEventListeners, []);

  const { BoundaryElement } = props;

  const sharedContext = {
    boundaryIsActive,
    boundaryIsFocussed,
    containerRef
  };

  return (
    <BoundaryClickWatcherContext.Provider value={sharedContext}>
      <BoundaryElement
        {...props}
        tabIndex={props.tabIndex}
        role="button"
        ref={el => {
          containerRef.current = el;
        }}
        onClick={handleInnerClick}
        onKeyPress={handleInnerClick}
        className={`boundary-click-watcher ${props.className}`}
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
