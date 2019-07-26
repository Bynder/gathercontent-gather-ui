import React from 'react';
import PropTypes from 'prop-types';
import { HierarchyFolderRow } from './HierarchyFolderRow';
import { HierarchyItemRow } from './HierarchyItemRow';

export const HierarchyCollection = ({
  levelCount,
  maxItemCount,
  index,
  open
}) => {
  const itemCount = Math.floor(Math.random() * maxItemCount || 0);

  return (
    <div className="h-margin-left">
      <HierarchyFolderRow childCount={itemCount} open={open} />

      {open && [...Array(itemCount).keys()].map(() => <HierarchyItemRow />)}

      {index + 1 !== levelCount && (
        <HierarchyCollection
          levelCount={levelCount}
          maxItemCount={maxItemCount}
          index={index + 1}
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
  open: PropTypes.bool.isRequired
};
