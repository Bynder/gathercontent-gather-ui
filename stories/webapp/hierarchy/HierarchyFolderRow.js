import React from 'react';
import faker from 'faker';
import { action } from '@storybook/addon-actions';
import { Button, FolderRow, Icon, TooltipWrapper } from '../../../lib';
import EditableTextWrapper from '../../../lib/EditableTextWrapper';

export const HierarchyFolderRow = ({ name, childCount, children, open }) => (
  <FolderRow
    className="h-margin-bottom-half"
    metaText={`${childCount} items`}
    name={
      <EditableTextWrapper
        value={name}
        className="h-margin-clear"
        onChange={action('Folder name changed.')}
      >
        {name}
      </EditableTextWrapper>
    }
    actions={
      <TooltipWrapper
        id="new folder"
        tooltipText="New folder"
        className="folder-row__action"
        placement="top"
      >
        <Button types={['icon-only']} onClick={() => {}}>
          <Icon name="folderNew" />
        </Button>
      </TooltipWrapper>
    }
    open={open}
    showToggle
    style={{ minWidth: '320px' }}
  >
    <>{children}</>
  </FolderRow>
);

HierarchyFolderRow.propTypes = FolderRow.propTypes;

HierarchyFolderRow.defaultProps = {
  ...FolderRow.defaultProps,
  name: faker.commerce.department()
};
