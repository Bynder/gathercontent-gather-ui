import { useState } from 'react';

export const WindowingNestedContainer = ({ children, allIds }) => {
  const [windowingIds, setWindowingIds] = useState(allIds);

  const addIds = (ids, index) =>
    setWindowingIds([
      ...windowingIds.slice(0, index),
      ...ids,
      ...windowingIds.slice(index)
    ]);

  const removeIds = (offset, length) =>
    setWindowingIds([
      ...windowingIds.slice(0, offset),
      ...windowingIds.slice(offset + length, windowingIds.length)
    ]);

  return children({ windowingIds, addIds, removeIds });
};
