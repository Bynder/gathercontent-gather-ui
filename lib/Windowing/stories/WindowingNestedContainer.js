import { useState } from 'react';

export const WindowingNestedContainer = ({ children, allIds }) => {
  const [windowingIds, setWindowingIds] = useState(allIds);

  const addIds = (ids, index) =>
    setWindowingIds([...windowingIds.slice(0, index), ids, ...windowingIds.slice(index)]);

  const removeIds = (index, length) => {
    console.log(index, length);
    setWindowingIds([
      ...windowingIds.slice(0, index),
      ...windowingIds.slice(index + length, windowingIds.length)
    ]);
  };

  console.log(windowingIds);

  return children({ windowingIds, addIds, removeIds });
};
