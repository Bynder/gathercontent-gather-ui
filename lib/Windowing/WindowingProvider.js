import React, { useState, useCallback, createContext } from 'react';
import { node, number } from 'prop-types';
import debounce from 'debounce';

export const WindowingContext = createContext({});

const WindowingProvider = ({ children, debounceTimer, ...rest }) => {
  const [scrollTop, setScrollTop] = useState(null);
  const [height, setHeight] = useState(null);

  const ref = useCallback(elem => {
    if (elem !== null) {
      setHeight(elem.getBoundingClientRect().height);
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
      <div ref={ref} {...rest}>
        {children}
      </div>
    </WindowingContext.Provider>
  );
};

WindowingProvider.propTypes = {
  children: node.isRequired,
  debounceTimer: number
};

WindowingProvider.defaultProps = {
  debounceTimer: 15
};

export { WindowingProvider };
