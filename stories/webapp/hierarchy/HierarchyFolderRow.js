import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import { FolderRow } from '../../../lib';

export const HierarchyFolderRow = ({ childCount, children, open }) => (
  <FolderRow
    className="h-margin-bottom-half"
    metaText={`${childCount} items`}
    name={faker.commerce.department()}
    open={open}
    showToggle={childCount !== 0}
  >
    {children}
  </FolderRow>
);

HierarchyFolderRow.propTypes = {
  childCount: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  open: PropTypes.bool.isRequired
};

HierarchyFolderRow.defaultProps = {
  children: null
};
