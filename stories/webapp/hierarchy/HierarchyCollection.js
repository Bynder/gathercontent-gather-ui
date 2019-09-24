import React, { useState } from 'react';
import { Windowing } from 'lib';
import { HierarchyFolderRow } from './HierarchyFolderRow';
import { HierarchyItemRow } from './ItemRow/HierarchyItemRow';

export const HierarchyCollection = ({
  inViewWindowingIds,
  data,
  statusColor
}) => {
  const [newItemParentId, setNewItemParentId] = useState('');
  const newTempItemName = 'New Item';

  return inViewWindowingIds.map(id => {
    if (data.allFolderIds.indexOf(id) > -1) {
      return (
        <Windowing.Item
          key={id}
          index={data.allIds.indexOf(id)}
          style={{
            paddingLeft: `${data.foldersById[id].depth * 40}px`
          }}
        >
          <HierarchyFolderRow
            id={id}
            name={data.foldersById[id].name}
            onNewItem={() => {
              setNewItemParentId(id);
            }}
            childIds={data.itemsByParent[id]}
          />
        </Windowing.Item>
      );
    }

    const parentId = data.itemsById[id]
      ? data.itemsById[id].parentFolderId
      : newItemParentId;

    const name = data.itemsById[id] ? data.itemsById[id].name : newTempItemName;

    return (
      <Windowing.Item
        key={id}
        index={data.allIds.indexOf(id)}
        style={{
          paddingLeft: `${(data.foldersById[parentId].depth + 1) * 40}px`
        }}
      >
        <HierarchyItemRow id={id} name={name} status={{ color: statusColor }} />
      </Windowing.Item>
    );
  });
};

HierarchyCollection.propTypes = {};
