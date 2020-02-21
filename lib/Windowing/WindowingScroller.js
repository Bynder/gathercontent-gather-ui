import React, { useCallback, useContext, useEffect } from 'react';
import { node, shape } from 'prop-types';
import debounce from 'debounce';
import { WindowingContext } from './Windowing';

const WindowingScroller = ({ children, style, ...rest }) => {
  const {
    setScrollTop,
    setHeight,
    containerHeight,
    debounceTimer,
    renderIndexes,
    setInViewWindowingIds,
    allWindowingIds
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

  useEffect(() => {
    const { offset, length } = renderIndexes;

    setInViewWindowingIds(
      length > 0 ? allWindowingIds.slice(offset, offset + length) : []
    );
  }, [renderIndexes.offset, renderIndexes.length, allWindowingIds]);

  return (
    <div
      ref={ref}
      data-testid="windowing-scroller"
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative',
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

WindowingScroller.propTypes = {
  children: node.isRequired,
  style: shape()
};

WindowingScroller.defaultProps = {
  style: {}
};

export { WindowingScroller };
