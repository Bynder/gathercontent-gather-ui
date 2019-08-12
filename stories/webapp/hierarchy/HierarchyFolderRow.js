import React from 'react';
import { number, oneOfType, node, arrayOf, bool } from 'prop-types';
import faker from 'faker';
import { action } from '@storybook/addon-actions';
import { FolderRow } from '../../../lib';
import EditableTextWrapper from '../../../lib/EditableTextWrapper';

export const HierarchyFolderRow = ({ childCount, children, open }) => {
  const name = faker.commerce.department();

  return (
    <FolderRow
      className="h-margin-bottom-half"
      metaText={`${childCount} items`}
      name={
        <EditableTextWrapper
          value={name}
          className="h-margin-clear h-width-100"
          onChange={action('Folder name changed.')}
        >
          {name}
        </EditableTextWrapper>
      }
      open={open}
      showToggle
      style={{ minWidth: '320px' }}
    >
      {children}
    </FolderRow>
  );
};

HierarchyFolderRow.propTypes = {
  childCount: number.isRequired,
  children: oneOfType([node, arrayOf(node)]),
  open: bool.isRequired
};

HierarchyFolderRow.defaultProps = {
  children: null
};
