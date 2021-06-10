import React, { useEffect, useState, useContext, useRef } from 'react';
import { isEqual } from 'lodash';
import cx from 'classnames';
import { DropdownContext } from './DropdownProvider';

const CONTENT_BOUNDARY_PADDING = 40;

export function DropdownContent({
  children,
  className,
  collapse,
  right,
  centre,
  top,
  fixRight,
  full,
  noBorder,
  autoPositionLeft,
  noTransform
}) {
  const { showContent, autoPosition, bounds } = useContext(DropdownContext) || {
    showContent: false
  };
  const [style, setStyle] = useState({});
  const contentElementRef = useRef(null);

  const getTopPosition = (pos, contentBounds) => {
    let newPos = pos;

    const originalExceedsHeight = pos > window.innerHeight;

    if (originalExceedsHeight) {
      newPos = bounds.top - contentBounds.height;
    }

    if (pos !== newPos) {
      const newPositionPrecedesHeight = newPos < 0;
      return newPositionPrecedesHeight
        ? bounds.top - contentBounds.height / 2
        : newPos;
    }

    return bounds.bottom;
  };

  const getLeftPosition = (pos, contentBounds) => {
    let newPos = pos;

    const originalExceedsWidth = pos > window.innerWidth;

    if (originalExceedsWidth) {
      const anchorBounds = autoPositionLeft ? bounds.right : bounds.left;
      newPos = anchorBounds - contentBounds.width;
    }

    if (pos !== newPos) {
      const newPositionPrecedesWidth = newPos < 0;
      return newPositionPrecedesWidth
        ? bounds.right - contentBounds.width / 2
        : newPos;
    }

    return autoPositionLeft ? bounds.left : bounds.right;
  };

  const getStyle = () => {
    if (contentElementRef?.current && autoPosition && showContent) {
      const contentBounds = contentElementRef.current.getBoundingClientRect();

      const bottomOfDropdownContent =
        bounds.top !== 'auto'
          ? bounds.top + contentBounds.height + CONTENT_BOUNDARY_PADDING
          : bounds.top;

      const rightOfDropdownContent =
        bounds.left !== 'auto'
          ? bounds.left + contentBounds.width + CONTENT_BOUNDARY_PADDING
          : bounds.left;

      return {
        top: getTopPosition(bottomOfDropdownContent, contentBounds),
        left: getLeftPosition(rightOfDropdownContent, contentBounds)
      };
    }

    if (autoPosition && !showContent) {
      return {
        left: -99999,
        top: -99999
      };
    }

    return null;
  };

  useEffect(() => {
    const newStyle = getStyle();
    if (!isEqual(newStyle, style)) {
      setStyle(newStyle);
    }
  }, [showContent, !!contentElementRef.current]);

  const classNames = cx(`dropdown__content shadow ${className}`, {
    'is-active': showContent,
    'dropdown__content--collapse': collapse,
    'dropdown__content--right': right,
    'dropdown__content--centre': centre,
    'dropdown__content--top': top,
    'dropdown__content--fix-right': fixRight,
    'dropdown__content--full': full,
    'dropdown__content--noborder': noBorder,
    'border border-solid border-neutral-90 rounded': !noBorder,
    'dropdown__content--no-transform': noTransform
  });

  return (
    <div className={classNames} style={style} ref={contentElementRef}>
      {typeof children === 'function' ? children(showContent) : children}
    </div>
  );
}

DropdownContent.defaultProps = {
  className: '',
  collapse: false,
  right: false,
  centre: false,
  top: false,
  fixRight: false,
  full: false,
  noBorder: false,
  autoPositionLeft: false
};
