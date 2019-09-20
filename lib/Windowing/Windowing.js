import React, { useState, createContext, useEffect } from 'react';
import { node, number, arrayOf } from 'prop-types';

export const WindowingContext = createContext({});

const Windowing = ({
  children,
  containerHeight,
  debounceTimer,
  itemHeight,
  buffer,
  allItems
}) => {
  const [scrollTop, setScrollTop] = useState(null);
  const [height, setHeight] = useState(null);
  const [renderIndexes, setRenderIndexes] = useState({});
  const [windowingItems, setWindowingItems] = useState(allItems);

  const subtractFromStartIndex = index => Math.max(index - buffer, 0);

  const addToEndIndex = index =>
    Math.min(windowingItems.length, index + buffer);

  const getRenderIndexes = () => {
    const startBoundary = scrollTop;
    const endBoundary = startBoundary + height;

    const startIndex = Math.round(startBoundary / itemHeight);
    const endIndex = Math.round(endBoundary / itemHeight);

    const startWithBuffer = subtractFromStartIndex(startIndex);
    const endWithBuffer = addToEndIndex(endIndex);

    setRenderIndexes({
      offset: startWithBuffer,
      length: endWithBuffer - startWithBuffer
    });
  };

  useEffect(() => {
    getRenderIndexes();
  }, [height, scrollTop]);

  const addIds = (ids, index) =>
    setWindowingItems([
      ...windowingItems.slice(0, index),
      ...ids,
      ...windowingItems.slice(index)
    ]);

  const removeIds = (offset, length) =>
    setWindowingItems([
      ...windowingItems.slice(0, offset),
      ...windowingItems.slice(offset + length, windowingItems.length)
    ]);

  const sharedState = {
    height,
    scrollTop,
    renderIndexes,
    itemHeight,
    baseItemStyle: {
      height: `${itemHeight}px`
    },
    setScrollTop,
    setHeight,
    debounceTimer,
    containerHeight,
    addIds,
    removeIds,
    windowingItems
  };

  return (
    <WindowingContext.Provider value={sharedState}>
      {children}
    </WindowingContext.Provider>
  );
};

Windowing.propTypes = {
  children: node.isRequired,
  itemHeight: number.isRequired,
  debounceTimer: number,
  containerHeight: number,
  buffer: number,
  allItems: arrayOf(node).isRequired
};

Windowing.defaultProps = {
  debounceTimer: 15,
  containerHeight: 0,
  buffer: 10
};

export { Windowing };
