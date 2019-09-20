import React, { useCallback, useContext } from 'react';
import { node } from 'prop-types';
import debounce from 'debounce';
import { WindowingContext } from './Windowing';

const WindowingScroller = ({ children, ...rest }) => {
  const {
    setScrollTop,
    setHeight,
    containerHeight,
    debounceTimer
  } = useContext(WindowingContext);

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
    <div
      ref={ref}
      data-testid="windowing-scroller"
      style={{
        height: `${containerHeight}px`,
        overflow: 'scroll',
        position: 'relative'
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

WindowingScroller.propTypes = {
  children: node.isRequired
};

export { WindowingScroller };
