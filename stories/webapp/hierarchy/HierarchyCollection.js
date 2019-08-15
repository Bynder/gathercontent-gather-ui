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
  const data = hierarchyData[thisIndex];

  return !data ? null : (
    <>
      <HierarchyFolderRow
        childCount={data.children.length}
        name={data.name}
        open={open}
      >
        {(showNewFolder, setShowNewFolder) => (
          <>
            {data.children.map(d => (
              <HierarchyItemRow key={d.id} {...d} />
            ))}

            {showNewFolder && (
              <NewHierarchyFolderRow
                removeFolder={() => setShowNewFolder(false)}
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
    </>
  );
};

HierarchyCollection.propTypes = {
  hierarchyData: shape({}).isRequired,
  index: number.isRequired,
  open: bool.isRequired,
  statusColor: StatusIndicator.propTypes.color.isRequired
};
