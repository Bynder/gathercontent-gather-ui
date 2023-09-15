/* eslint-disable no-param-reassign */
import React, { createContext, useEffect, useRef, useState } from "react";

const getElementPath = (targetElement: any) => {
  let path = [targetElement];

  // @ts-expect-error TS(7023): 'addParentToPath' implicitly has return type 'any'... Remove this comment to see the full error message
  const addParentToPath = (element: any) => {
    const { parentElement } = element;

    if (parentElement) {
      path = [...path, parentElement];
      return addParentToPath(parentElement);
    }

    return path;
  };

  return addParentToPath(targetElement);
};

const removeDocumentEventListener = (
  handleClickRef: any,
  handleMouseDownRef: any
) => {
  document.removeEventListener("click", handleClickRef.current);
  document.removeEventListener("mousedown", handleMouseDownRef.current);
  handleClickRef.current = null;
  handleMouseDownRef.current = null;
};

const addDocumentEventListener = (
  handleClick: any,
  handleMouseDown: any,
  handleClickRef: any,
  handleMouseDownRef: any
) => {
  const hasExistingEvenListener = handleClickRef.current;
  if (hasExistingEvenListener) {
    removeDocumentEventListener(handleClickRef, handleMouseDownRef);
  }

  handleClickRef.current = handleClick;
  handleMouseDownRef.current = handleMouseDown;
  document.addEventListener("click", handleClickRef.current);
  document.addEventListener("mousedown", handleMouseDownRef.current);
};

const BoundaryClickWatcherContext = createContext({});

interface Props {
  insideClickHandler?: (e?: React.MouseEvent) => void;
  outsideClickHandler?: (e?: React.MouseEvent) => void;
  onMouseEnter?: (e?: React.MouseEvent) => void;
  onMouseLeave?: (e?: React.MouseEvent) => void;
  className?: string;
  alwaysListen?: boolean;
  isActive?: boolean;
  isFocussed?: boolean;
  BoundaryElement?: string;
  tabIndex?: number | null;
  outsideClickEventValidator?: (e?: React.MouseEvent) => boolean;
  children:
    | React.ReactNode
    | ((
        boundaryIsActive: boolean,
        boundaryIsFocussed: boolean
      ) => React.ReactNode);
}

export function BoundaryClickWatcher({
  insideClickHandler = () => {},
  outsideClickHandler = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  className = "",
  alwaysListen = false,
  isActive = false,
  isFocussed = false,
  BoundaryElement = "div",
  tabIndex = 0,
  outsideClickEventValidator = () => true,
  children,
}: Props) {
  const [boundaryIsActive, setBoundaryIsActive] = useState(isActive);
  const [boundaryIsFocussed, setBoundaryIsFocussed] = useState(isFocussed);
  const clickedElementPath = useRef([]);
  const containerRef = useRef();
  const handleClickRef = useRef();
  const handleMouseDownRef = useRef();

  const handleBlur = (e: any) => {
    setBoundaryIsFocussed(e.target === containerRef.current && false);
  };

  const handleFocus = (e: any) => {
    setBoundaryIsFocussed(e.target === containerRef.current);
  };

  const handleInnerClick = () => {
    setBoundaryIsActive(true);
    insideClickHandler();
  };

  const handleOuterClick = (event: any) => {
    setBoundaryIsActive(false);
    outsideClickHandler(event);
  };

  const handleMouseDown = ({ target }: any) => {
    clickedElementPath.current = getElementPath(target);
  };

  const handleClick = (event: any) => {
    const { target } = event;

    const targetIsContainer = target === containerRef.current;

    const elementPathContainsContainer =
      // @ts-expect-error TS(2345): Argument of type 'undefined' is not assignable to ... Remove this comment to see the full error message
      clickedElementPath.current.indexOf(containerRef.current) !== -1;

    const containerContainsFocus =
      containerRef.current &&
      // @ts-expect-error TS(2339): Property 'contains' does not exist on type 'never'... Remove this comment to see the full error message
      containerRef.current.contains(document.activeElement);

    const hasPassedValidation = outsideClickEventValidator(event);

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
    setBoundaryIsActive(isActive);
  }, [isActive]);

  useEffect(() => {
    if (boundaryIsActive || alwaysListen) {
      addDocumentEventListener(
        handleClick,
        handleMouseDown,
        handleClickRef,
        handleMouseDownRef
      );
    }

    if (!boundaryIsActive && !alwaysListen) {
      removeDocumentEventListener(handleClickRef, handleMouseDownRef);
    }

    return () => {
      removeDocumentEventListener(handleClickRef, handleMouseDownRef);
    };
  }, [boundaryIsActive, outsideClickEventValidator]);

  const sharedContext = {
    boundaryIsActive,
    boundaryIsFocussed,
    clickedElementPath,
    containerRef,
  };

  return (
    <BoundaryClickWatcherContext.Provider value={sharedContext}>
      {/* @ts-expect-error */}
      <BoundaryElement
        tabIndex={tabIndex}
        role="button"
        ref={(el: any) => {
          containerRef.current = el;
        }}
        onClick={handleInnerClick}
        onKeyPress={handleInnerClick}
        className={`boundary-click-watcher ${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        {typeof children === "function"
          ? children(boundaryIsActive, boundaryIsFocussed)
          : children}
      </BoundaryElement>
    </BoundaryClickWatcherContext.Provider>
  );
}

export default BoundaryClickWatcher;
