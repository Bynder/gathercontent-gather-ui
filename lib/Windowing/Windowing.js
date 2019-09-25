import React, { useState, createContext, useEffect } from 'react';
import { node, number, arrayOf, any } from 'prop-types';

export const WindowingContext = createContext({});

const Windowing = ({
  children,
  containerHeight,
  debounceTimer,
  itemHeight,
  buffer,
  allIds
}) => {
  const [scrollTop, setScrollTop] = useState(null);
  const [height, setHeight] = useState(null);
  const [renderIndexes, setRenderIndexes] = useState({});
  const [allWindowingIds, setAllWindowingIds] = useState(allIds);
  const [inViewWindowingIds, setInViewWindowingIds] = useState([]);

  const subtractFromStartIndex = index => Math.max(index - buffer, 0);

  const addToEndIndex = index =>
    Math.min(allWindowingIds.length, index + buffer);

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

  useEffect(getRenderIndexes, [height, scrollTop, allWindowingIds]);

  const addIds = (ids, index) =>
    setAllWindowingIds([
      ...allWindowingIds.slice(0, index),
      ...ids,
      ...allWindowingIds.slice(index)
    ]);

  const removeIds = (offset, length) =>
    setAllWindowingIds([
      ...allWindowingIds.slice(0, offset),
      ...allWindowingIds.slice(offset + length, allWindowingIds.length)
    ]);

  const sharedState = {
    scrollTop,
    setScrollTop,
    renderIndexes,
    itemHeight,
    baseItemStyle: {
      height: `${itemHeight}px`
    },
    setHeight,
    debounceTimer,
    containerHeight,
    addIds,
    removeIds,
    allWindowingIds,
    inViewWindowingIds,
    setInViewWindowingIds
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
  allIds: arrayOf(any).isRequired
};

Windowing.defaultProps = {
  debounceTimer: 15,
  containerHeight: 0,
  buffer: 10
};

export { Windowing };
