import React, { useEffect, useState } from 'react';
import { func, node, number } from 'prop-types';

function InViewList({
  defaultItemHeight,
  scrollTop,
  height,
  items,
  children,
  offset
}) {
  const [renderIndexes, setRenderIndexes] = useState({});

  const subtractFromStartIndex = index =>
    index - offset <= 0 ? 0 : index - offset;

  const addToEndIndex = index =>
    index + offset >= items.length ? items.length : index + offset;

  const getRenderIndexes = () => {
    const containerHeight = height;
    const scrollPosition = scrollTop;
    const itemHeight = defaultItemHeight;

    const startPixel = scrollPosition;
    const endPixel = startPixel + containerHeight;

    const start = subtractFromStartIndex(Math.round(startPixel / itemHeight));
    const end = addToEndIndex(Math.round(endPixel / itemHeight));

    setRenderIndexes({ start, end });
  };

  useEffect(() => {
    getRenderIndexes();
  }, [height, scrollTop]);

  const sharedState = {
    renderIndexes,
    style: {
      position: 'absolute',
      width: `100%`,
      height: `${defaultItemHeight}px`
    },
    itemsInView: items.slice(renderIndexes.start, renderIndexes.end)
  };

  return (
    <div
      style={{
        height: `${items.length * defaultItemHeight}px`
      }}
    >
      {children(sharedState)}
    </div>
  );
}

InViewList.propTypes = {
  defaultItemHeight: number.isRequired,
  scrollTop: number.isRequired,
  height: number.isRequired,
  items: node.isRequired,
  children: func.isRequired,
  offset: number
};

InViewList.defaultProps = {
  offset: 20
};

export { InViewList };
