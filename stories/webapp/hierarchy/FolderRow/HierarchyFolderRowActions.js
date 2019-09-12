import React from 'react';
import { func } from 'prop-types';
import { Button, Icon, TooltipWrapper, FolderRow } from 'lib';

function HierarchyFolderRowActions({ startCreatingFolder, startCreatingItem }) {
  return (
    <>
      <FolderRow.Action>
        <TooltipWrapper
          id="new-folder"
          tooltipText="New folder"
          className="folder-row__action"
          placement="top"
        >
          <Button types={['icon-only']} onClick={startCreatingFolder}>
            <Icon name="folderNew" />
          </Button>
        </TooltipWrapper>
      </FolderRow.Action>
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
    </>
  );
}

HierarchyFolderRowActions.propTypes = {
  startCreatingFolder: func.isRequired,
  startCreatingItem: func.isRequired
};

export { HierarchyFolderRowActions };
