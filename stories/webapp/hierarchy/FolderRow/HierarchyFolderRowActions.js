import React from 'react';
import { func } from 'prop-types';
import { Button, Icon, TooltipWrapper } from '../../../../lib';

function HierarchyFolderRowActions({ startCreatingFolder }) {
  return (
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
  );
}

HierarchyFolderRowActions.propTypes = {
  startCreatingFolder: func.isRequired
};

export { HierarchyFolderRowActions };
