import React, { useState, useCallback, createContext } from 'react';
import { node, number } from 'prop-types';
import debounce from 'debounce';

export const WindowingContext = createContext({});

const WindowingProvider = ({
  children,
  containerHeight,
  debounceTimer,
  ...rest
}) => {
  const [scrollTop, setScrollTop] = useState(null);
  const [height, setHeight] = useState(null);

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

  return (
    <WindowingContext.Provider value={{ height, scrollTop }}>
      <div ref={ref} {...rest} data-testid="windowing-scroller">
        {children}
      </div>
    </WindowingContext.Provider>
  );
};

WindowingProvider.propTypes = {
  children: node.isRequired,
  debounceTimer: number,
  containerHeight: number
};

WindowingProvider.defaultProps = {
  debounceTimer: 15,
  containerHeight: 0
};

export { WindowingProvider };
