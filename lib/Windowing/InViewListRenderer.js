import React, { useEffect, useState } from 'react';

const InViewListRenderer = ({
  defaultItemHeight,
  scrollTop,
  height,
  items,
  children
}) => {
  const [renderIndexes, setRenderIndexes] = useState({});

  const getRenderIndexes = () => {
    const containerHeight = height;
    const scrollPosition = scrollTop;
    const itemHeight = defaultItemHeight;

    const startPixel = scrollPosition;
    const endPixel = startPixel + containerHeight;

    const start = startPixel / itemHeight;
    const end = endPixel / itemHeight;

    setRenderIndexes({ start: Math.round(start), end: Math.round(end) });
  };

  useEffect(() => {
    getRenderIndexes();
  }, [height, scrollTop]);

  const renderCount = renderIndexes.end - renderIndexes.start;

  const sharedState = {
    renderIndexes,
    style: {
      position: 'absolute',
      width: `100%`,
      height: `${defaultItemHeight}px`
    },
    itemsInView: items.slice(renderIndexes.start, renderCount)
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
};

export { InViewListRenderer };
