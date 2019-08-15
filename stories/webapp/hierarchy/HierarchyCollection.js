import React from 'react';
import { number, bool } from 'prop-types';
import uuid from 'uuid/v1';
import { HierarchyFolderRow } from './HierarchyFolderRow';
import { HierarchyItemRow } from './HierarchyItemRow';
import { StatusIndicator } from '../../../lib';

export const HierarchyCollection = ({
  levelCount,
  maxItemCount,
  index,
  open,
  statusColor
}) => {
  const itemCount = Math.floor(Math.random() * maxItemCount || 0);

  return (
    <>
      <HierarchyFolderRow
        childCount={itemCount}
        open={open}
        id={`level-${index}`}
      >
        {[...Array(itemCount).keys()].map((_, childIndex) => (
          <HierarchyItemRow
            key={uuid()}
            statusColor={statusColor}
            id={`child-${childIndex}-level-${index}`}
          />
        ))}

        {index + 1 !== levelCount && (
          <HierarchyCollection
            levelCount={levelCount}
            maxItemCount={maxItemCount}
            index={index + 1}
            statusColor={statusColor}
            open={open}
          />
        )}
      </HierarchyFolderRow>
    </>
  );
};

HierarchyCollection.propTypes = {
  levelCount: number.isRequired,
  maxItemCount: number.isRequired,
  index: number.isRequired,
  open: bool.isRequired,
  statusColor: StatusIndicator.propTypes.color.isRequired
};
