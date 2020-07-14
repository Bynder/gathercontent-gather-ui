/* eslint-disable no-param-reassign */
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

const removeDocumentEventListener = (handleClickRef, handleMouseDownRef) => {
  document.removeEventListener('click', handleClickRef.current);
  document.removeEventListener('mousedown', handleMouseDownRef.current);
  handleClickRef.current = null;
  handleMouseDownRef.current = null;
};

const addDocumentEventListener = (
  handleClick,
  handleMouseDown,
  handleClickRef,
  handleMouseDownRef
) => {
  const hasExistingEvenListener = handleClickRef.current;
  if (hasExistingEvenListener) {
    removeDocumentEventListener(handleClickRef, handleMouseDownRef);
  }

  handleClickRef.current = handleClick;
  handleMouseDownRef.current = handleMouseDown;
  document.addEventListener('click', handleClickRef.current);
  document.addEventListener('mousedown', handleMouseDownRef.current);
};

const BoundaryClickWatcherContext = createContext({});

function BoundaryClickWatcher(props) {
  const [boundaryIsActive, setBoundaryIsActive] = useState(props.isActive);
  const [boundaryIsFocussed, setBoundaryIsFocussed] = useState(
    props.isFocussed
  );
  const clickedElementPath = useRef([]);
  const containerRef = useRef();
  const handleClickRef = useRef();
  const handleMouseDownRef = useRef();

  const handleBlur = e => {
    setBoundaryIsFocussed(e.target === containerRef.current && false);
  };

  const handleFocus = e => {
    setBoundaryIsFocussed(e.target === containerRef.current);
  };

  const handleInnerClick = () => {
    setBoundaryIsActive(true);
    props.insideClickHandler();
  };

  const handleOuterClick = event => {
    setBoundaryIsActive(false);
    props.outsideClickHandler(event);
  };

  const handleMouseDown = ({ target }) => {
    clickedElementPath.current = getElementPath(target);
  };

  const handleClick = event => {
    const { target } = event;

    const targetIsContainer = target === containerRef.current;

    const elementPathContainsContainer =
      clickedElementPath.current.indexOf(containerRef.current) !== -1;

    const containerContainsFocus =
      containerRef.current &&
      containerRef.current.contains(document.activeElement);

    const hasPassedValidation = props.outsideClickEventValidator(event);

    const userHasClickedOutside =
      !targetIsContainer &&
      !elementPathContainsContainer &&
      !containerContainsFocus &&
      hasPassedValidation;

    if (userHasClickedOutside) {
      handleOuterClick(event);
    }
  };

  useEffect(() => {
    setBoundaryIsActive(props.isActive);
  }, [props.isActive]);

  useEffect(() => {
    if (boundaryIsActive || props.alwaysListen) {
      addDocumentEventListener(
        handleClick,
        handleMouseDown,
        handleClickRef,
        handleMouseDownRef
      );
    }

    if (!boundaryIsActive && !props.alwaysListen) {
      removeDocumentEventListener(handleClickRef, handleMouseDownRef);
    }

    return () => {
      removeDocumentEventListener(handleClickRef, handleMouseDownRef);
    };
  }, [boundaryIsActive, props.outsideClickEventValidator]);

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
  tabIndex: number,
  outsideClickEventValidator: func
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
  tabIndex: 0,
  outsideClickEventValidator: () => true
};

export default BoundaryClickWatcher;
