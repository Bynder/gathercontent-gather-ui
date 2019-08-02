import React from 'react';
import { number, oneOfType, node, arrayOf, bool } from 'prop-types';
import faker from 'faker';
import { FolderRow } from '../../../lib';

export const HierarchyFolderRow = ({ childCount, children, open }) => (
  <FolderRow
    className="h-margin-bottom-half"
    metaText={`${childCount} items`}
    name={faker.commerce.department()}
    open={open}
    showToggle
    style={{ minWidth: '320px' }}
  >
    {children}
  </FolderRow>
);

HierarchyFolderRow.propTypes = {
  childCount: number.isRequired,
  children: oneOfType([node, arrayOf(node)]),
  open: bool.isRequired
};

HierarchyFolderRow.defaultProps = {
  children: null
};
