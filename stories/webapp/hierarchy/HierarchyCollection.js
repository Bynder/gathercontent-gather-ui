import React from 'react';
import { number, bool, shape } from 'prop-types';
import { HierarchyFolderRow } from './HierarchyFolderRow';
import { HierarchyItemRow } from './HierarchyItemRow';
import { StatusIndicator } from '../../../lib';
import { NewHierarchyFolderRow } from './FolderRow/NewHierarchyFolderRow';

export const HierarchyCollection = ({
  hierarchyData,
  index,
  open,
  statusColor
}) => {
  const thisIndex = index + 1;
  const folderId = hierarchyData.allFolderIds[thisIndex];
  const parentData = hierarchyData.foldersById[folderId];
  const childData = hierarchyData.itemsByParent[folderId];

  return !parentData ? null : (
    <HierarchyFolderRow
      parentData={parentData}
      childIds={childData}
      open={open}
    >
      {(newFolderId, setNewFolderId) => (
        <>
          {childData.map(d => (
            <HierarchyItemRow key={d} {...hierarchyData.itemsById[d]} />
          ))}

          {newFolderId && (
            <NewHierarchyFolderRow
              id={newFolderId}
              removeFolder={() => setNewFolderId(false)}
            />
          )}

          <HierarchyCollection
            hierarchyData={hierarchyData}
            index={thisIndex}
            statusColor={statusColor}
            open={open}
          />
        </>
      )}
    </HierarchyFolderRow>
  );
};

HierarchyCollection.propTypes = {
  hierarchyData: shape({}).isRequired,
  index: number.isRequired,
  open: bool.isRequired,
  statusColor: StatusIndicator.propTypes.color.isRequired
};
