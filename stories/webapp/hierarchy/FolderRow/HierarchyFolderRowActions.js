import React from 'react';
import { func } from 'prop-types';
import { Button, Icon, TooltipWrapper, FolderRow } from 'lib';

function HierarchyFolderRowActions({ startCreatingFolder }) {
  return (
    <FolderRow.Action>
      <TooltipWrapper
        id="new folder"
        tooltipText="New folder"
        className="folder-row__action"
        placement="top"
      >
        <Button types={['icon-only']} onClick={startCreatingFolder}>
          <Icon name="folderNew" />
        </Button>
      </TooltipWrapper>
    </FolderRow.Action>
  );
}

HierarchyFolderRowActions.propTypes = {
  startCreatingFolder: func.isRequired
};

export { HierarchyFolderRowActions };
