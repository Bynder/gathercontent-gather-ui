import React from 'react';
import { func } from 'prop-types';
import { Button, Icon, TooltipWrapper, FolderRow } from 'lib';

function HierarchyFolderRowActions({ startCreatingItem }) {
  return (
    <FolderRow.Action>
      <TooltipWrapper
        id="new-item"
        tooltipText="New item"
        className="folder-row__action"
        placement="top"
      >
        <Button types={['icon-only']} onClick={startCreatingItem}>
          <Icon name="item" />
        </Button>
      </TooltipWrapper>
    </FolderRow.Action>
  );
}

HierarchyFolderRowActions.propTypes = {
  startCreatingItem: func.isRequired
};

export { HierarchyFolderRowActions };
