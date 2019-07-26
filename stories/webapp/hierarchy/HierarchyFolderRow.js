import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import { FolderRow, Button, Icon } from '../../../lib';

export const HierarchyFolderRow = ({ childCount, open }) => (
  <FolderRow
    className="h-margin-bottom-half"
    toggleAction={
      <Button types={['icon-only']} onClick={() => {}}>
        <Icon name="caret" />
      </Button>
    }
    metaText={`${childCount} items`}
    open={open}
  >
    {faker.commerce.department()}
  </FolderRow>
);

HierarchyFolderRow.propTypes = {
  childCount: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired
};
