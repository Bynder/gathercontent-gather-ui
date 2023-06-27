import React, { useCallback, useContext, useEffect } from 'react';
import { node, shape } from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'debo... Remove this comment to see the full error message
import debounce from 'debounce';
import { WindowingContext } from './Windowing';

const WindowingScroller = ({
  children,
  style,
  ...rest
}: any) => {
  const {
    // @ts-expect-error TS(2339): Property 'setScrollTop' does not exist on type '{}... Remove this comment to see the full error message
    setScrollTop,
    // @ts-expect-error TS(2339): Property 'setHeight' does not exist on type '{}'.
    setHeight,
    // @ts-expect-error TS(2339): Property 'containerHeight' does not exist on type ... Remove this comment to see the full error message
    containerHeight,
    // @ts-expect-error TS(2339): Property 'debounceTimer' does not exist on type '{... Remove this comment to see the full error message
    debounceTimer,
    // @ts-expect-error TS(2339): Property 'renderIndexes' does not exist on type '{... Remove this comment to see the full error message
    renderIndexes,
    // @ts-expect-error TS(2339): Property 'setInViewWindowingIds' does not exist on... Remove this comment to see the full error message
    setInViewWindowingIds,
    // @ts-expect-error TS(2339): Property 'allWindowingIds' does not exist on type ... Remove this comment to see the full error message
    allWindowingIds
  } = useContext(WindowingContext);

  const ref = useCallback(elem => {
    if (elem !== null) {
      setHeight(elem.getBoundingClientRect().height || containerHeight);
      setScrollTop(elem.scrollTop);

      const debouncedSetScrollTop = debounce((eventNode: any) => {
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
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  style: shape()
};

WindowingScroller.defaultProps = {
  style: {}
};

export { WindowingScroller };
