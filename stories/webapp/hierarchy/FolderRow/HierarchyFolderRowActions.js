import React from 'react';
import { func } from 'prop-types';
import { Button, Icon, TooltipWrapper, FolderRow } from 'lib';

function HierarchyFolderRowActions({ startCreatingItem }) {
  return (
    <FolderRow.Actions>
      <FolderRow.Action>
        <TooltipWrapper
          id="new-item"
          tooltipText="Add a new item"
          className="folder-row__action"
          placement="top"
        >
          <Button types={['icon-only']} onClick={startCreatingItem}>
            <Icon name="addItem" />
          </Button>
        </TooltipWrapper>
      </FolderRow.Action>
    </FolderRow.Actions>
  );
}

HierarchyFolderRowActions.propTypes = {
  startCreatingItem: func.isRequired,
};

export { HierarchyFolderRowActions };
