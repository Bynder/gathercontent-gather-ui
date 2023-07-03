import React, { useState, createContext, useEffect } from 'react';
import { node, number, arrayOf, string, oneOfType } from 'prop-types';

export const WindowingContext = createContext({});

function Windowing({
  children,
  containerHeight,
  debounceTimer,
  itemHeight,
  buffer,
  allIds
}: any) {
  const [scrollTop, setScrollTop] = useState(null);
  const [height, setHeight] = useState(null);
  const [renderIndexes, setRenderIndexes] = useState({});
  const [inViewWindowingIds, setInViewWindowingIds] = useState([]);

  const subtractFromStartIndex = (index: any) => Math.max(index - buffer, 0);

  const addToEndIndex = (index: any) => Math.min(allIds.length, index + buffer);

  const getRenderIndexes = () => {
    const startBoundary = scrollTop;
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    const endBoundary = startBoundary + height;

    // @ts-expect-error TS(2531): Object is possibly 'null'.
    const startIndex = Math.round(startBoundary / itemHeight);
    const endIndex = Math.round(endBoundary / itemHeight);

    const startWithBuffer = subtractFromStartIndex(startIndex);
    const endWithBuffer = addToEndIndex(endIndex);

    setRenderIndexes({
      offset: startWithBuffer,
      length: endWithBuffer - startWithBuffer
    });
  };

  useEffect(getRenderIndexes, [height, scrollTop, allIds]);

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
    inViewWindowingIds,
    setInViewWindowingIds,
    allWindowingIds: allIds
  };

  return (
    <WindowingContext.Provider value={sharedState}>
      {children}
    </WindowingContext.Provider>
  );
}

Windowing.propTypes = {
  children: node.isRequired,
  itemHeight: number.isRequired,
  debounceTimer: number,
  containerHeight: oneOfType([string, number]),
  buffer: number,
  allIds: arrayOf(oneOfType([string, number])).isRequired
};

Windowing.defaultProps = {
  debounceTimer: 15,
  containerHeight: '',
  buffer: 10
};

export { Windowing };
