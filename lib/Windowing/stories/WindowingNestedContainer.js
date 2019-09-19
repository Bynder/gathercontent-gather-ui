import { useState } from 'react';

export const WindowingNestedContainer = ({ children, allIds }) => {
  const [windowingIds, setWindowingIds] = useState(allIds);

  const addIds = (ids, index) => {
    console.log('addIDs', ids, index);
    setWindowingIds([
      ...windowingIds.slice(0, index), // first item
      ...ids, // insert these ids
      ...windowingIds.slice(index) // rest of items
    ]);
  };

  const removeIds = (offset, length) => {
    console.log('removeIds', index, length);

    setWindowingIds([
      ...windowingIds.slice(0, offset),
      ...windowingIds.slice(offset + length, windowingIds.length)
    ]);
  };

  return children({ windowingIds, addIds, removeIds });
};
