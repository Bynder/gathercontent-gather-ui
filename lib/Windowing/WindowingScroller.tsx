import React, { useCallback, useContext, useEffect } from "react";
import { node, shape } from "prop-types";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'debo... Remove this comment to see the full error message
import debounce from "debounce";
import { WindowingContext } from "./Windowing";

function WindowingScroller({ children, style, ...rest }: any) {
  const {
    setScrollTop,
    setHeight,
    containerHeight,
    debounceTimer,
    renderIndexes,
    setInViewWindowingIds,
    allWindowingIds,
  }: any = useContext(WindowingContext);

  const ref = useCallback((elem: HTMLElement) => {
    if (elem !== null) {
      setHeight(elem.getBoundingClientRect().height || containerHeight);
      setScrollTop(elem.scrollTop);

      const debouncedSetScrollTop = debounce((eventNode: any) => {
        setScrollTop(eventNode.scrollTop);
      }, debounceTimer);

      elem.addEventListener("scroll", () => debouncedSetScrollTop(elem));
      elem.addEventListener("resize", () => debouncedSetScrollTop(elem));
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
        overflow: "auto",
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

WindowingScroller.propTypes = {
  children: node.isRequired,
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  style: shape(),
};

WindowingScroller.defaultProps = {
  style: {},
};

export { WindowingScroller };
