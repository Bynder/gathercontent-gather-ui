import React, { useContext, useState } from 'react';
import { Windowing } from 'lib';
import { HierarchyFolderRow } from './HierarchyFolderRow';
import { HierarchyItemRow } from './ItemRow/HierarchyItemRow';

export const HierarchyCollection = ({
  inViewWindowingIds,
  data,
  statusColor,
  addIds,
  removeIds,
}) => {
  const { allWindowingIds } = useContext(Windowing.Context);
  const [newItemParentId, setNewItemParentId] = useState('');

  return inViewWindowingIds.map((id) => {
    if (data.allFolderIds.indexOf(id) > -1) {
      return (
        <Windowing.Item
          key={id}
          index={allWindowingIds.indexOf(id)}
          style={{
            paddingLeft: `${data.foldersById[id].depth * 40}px`,
          }}
        >
          <HierarchyFolderRow
            id={id}
            name={data.foldersById[id].name}
            onNewItem={() => {
              setNewItemParentId(id);
            }}
            childIds={data.itemsByParent[id]}
            addIds={addIds}
            removeIds={removeIds}
          />
        </Windowing.Item>
      );
    }

    const parentId = data.itemsById[id]
      ? data.itemsById[id].parentFolderId
      : newItemParentId;

    const name = data.itemsById[id] ? data.itemsById[id].name : '';

    return (
      <Windowing.Item
        key={id}
        index={allWindowingIds.indexOf(id)}
        style={{
          paddingLeft: `${(data.foldersById[parentId].depth + 1) * 40}px`,
        }}
      >
        <HierarchyItemRow id={id} name={name} status={{ color: statusColor }} />
      </Windowing.Item>
    );
  });
};

HierarchyCollection.propTypes = {};
