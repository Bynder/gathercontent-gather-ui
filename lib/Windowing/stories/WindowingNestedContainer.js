import { useState } from 'react';
import uuid from 'uuid/v4';

export const WindowingNestedContainer = ({ children }) => {
  const childID = uuid();
  const childID2 = uuid();
  const childID3 = uuid();
  const childID4 = uuid();
  const parentId = uuid();
  const parentId2 = uuid();
  const [data, setData] = useState({
    allIds: [parentId, childID, childID2, childID3, parentId2, childID4],
    parentIds: [parentId, parentId2],
    childIds: [childID, childID2, childID3, childID4],
    byId: {
      [parentId]: {
        depth: 0,
        name: 'folder 1'
      },
      [parentId2]: {
        depth: 1,
        name: 'folder 2'
      },
      [childID]: {
        depth: 1,
        name: 'item 1'
      },
      [childID2]: {
        depth: 1,
        name: 'item 2'
      },
      [childID3]: {
        depth: 1,
        name: 'item 3'
      },
      [childID4]: {
        depth: 2,
        name: 'item 4'
      }
    }
  });

  const addIds = (ids, index) =>
    setData({
      ...data,
      allIds: [...data.allIds.slice(0, index), ids, ...data.allIds.slice(index)]
    });

  const removeIds = (index, length) =>
    setData({ ...data, allIds: data.allIds.splice(index, length) });

  return children({ data, addIds, removeIds });
};
