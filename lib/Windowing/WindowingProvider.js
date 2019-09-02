import React, { useState, useCallback, createContext, useEffect } from 'react';
import { node, number } from 'prop-types';
import debounce from 'debounce';

export const WindowingContext = createContext({});

const WindowingProvider = ({
  children,
  containerHeight,
  debounceTimer,
  itemHeight,
  itemsLength,
  buffer,
  ...rest
}) => {
  const [scrollTop, setScrollTop] = useState(null);
  const [height, setHeight] = useState(null);
  const [renderIndexes, setRenderIndexes] = useState({});

  const subtractFromStartIndex = index => Math.max(index - buffer, 0);

  const addToEndIndex = index => Math.min(itemsLength, index + buffer);

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

  const ref = useCallback(elem => {
    if (elem !== null) {
      setHeight(elem.getBoundingClientRect().height || containerHeight);
      setScrollTop(elem.scrollTop);

      const debouncedSetScrollTop = debounce(eventNode => {
        setScrollTop(eventNode.scrollTop);
      }, debounceTimer);

      elem.addEventListener('scroll', () => debouncedSetScrollTop(elem));
      elem.addEventListener('resize', () => debouncedSetScrollTop(elem));
    }
  }, []);

  const sharedState = {
    height,
    scrollTop,
    renderIndexes,
    itemHeight,
    baseItemStyle: {
      position: 'absolute',
      width: `100%`,
      height: `${itemHeight}px`
    }
  };

  return (
    <WindowingContext.Provider value={sharedState}>
      <div ref={ref} {...rest} data-testid="windowing-scroller">
        {children}
      </div>
    </WindowingContext.Provider>
  );
};

WindowingProvider.propTypes = {
  children: node.isRequired,
  itemHeight: number.isRequired,
  itemsLength: number.isRequired,
  debounceTimer: number,
  containerHeight: number,
  buffer: number
};

WindowingProvider.defaultProps = {
  debounceTimer: 15,
  containerHeight: 0,
  buffer: 10
};

export { WindowingProvider };
