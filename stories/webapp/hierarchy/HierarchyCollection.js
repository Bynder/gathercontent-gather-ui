import React from 'react';
import PropTypes from 'prop-types';
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
    <div className="h-margin-left">
      <HierarchyFolderRow childCount={itemCount} open={open}>
        {[...Array(itemCount).keys()].map(() => (
          <HierarchyItemRow key={uuid()} statusColor={statusColor} />
        ))}
      </HierarchyFolderRow>

      {index + 1 !== levelCount && (
        <HierarchyCollection
          levelCount={levelCount}
          maxItemCount={maxItemCount}
          index={index + 1}
          statusColor={statusColor}
          open={open}
        />
      )}
    </div>
  );
};

HierarchyCollection.propTypes = {
  levelCount: PropTypes.number.isRequired,
  maxItemCount: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  statusColor: StatusIndicator.propTypes.color.isRequired
};
