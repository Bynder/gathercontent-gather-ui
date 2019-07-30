import React, { Fragment } from "react";
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import { FolderRow, FolderRowAction, TooltipWrapper, Icon, Button } from '../../lib';

const actions = (
  <Fragment>
    <FolderRowAction>
      <TooltipWrapper id="new folder" tooltipText="New folder" className="folder-row__action" placement="top">
        <Button types={['icon-only']} onClick={() => {}}>
          <Icon name="folderNew" />
        </Button>
      </TooltipWrapper>
      </FolderRowAction>
    <FolderRowAction>
      <TooltipWrapper id="delete folder" tooltipText="Delete folder" className="folder-row__action" placement="top">
        <Button types={['icon-only']} onClick={() => {}}>
          <Icon name="trash" />
        </Button>
      </TooltipWrapper>
    </FolderRowAction>
  </Fragment>
);

storiesOf('Components', module)
  .add('Folder Row', () => (
    <div>
      <StoryItem title="Folder Row">
        <FolderRow
          metaText="0 items"
          actions={actions}
        >
          <Icon name="folder" />
          Folder name
        </FolderRow>

        <FolderRow
          metaText="100 items"
          actions={actions}
          open
        >
          <Icon name="folderOpen" />
          Folder name
        </FolderRow>
      </StoryItem>
    </div>
  ));
