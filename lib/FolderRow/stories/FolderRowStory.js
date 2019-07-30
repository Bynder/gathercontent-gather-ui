import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import StoryItem from '../../../stories/styleguide/StoryItem';
import {
  FolderRow,
  FolderRowAction,
  TooltipWrapper,
  Icon,
  Button
} from '../../index';

const actions = (
  <Fragment>
    <FolderRowAction>
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
    </FolderRowAction>
    <FolderRowAction>
      <TooltipWrapper
        id="delete folder"
        tooltipText="Delete folder"
        className="folder-row__action"
        placement="top"
      >
        <Button types={['icon-only']} onClick={() => {}}>
          <Icon name="trash" />
        </Button>
      </TooltipWrapper>
    </FolderRowAction>
  </Fragment>
);

storiesOf('Components', module).add('Folder Row', () => (
  <StoryItem title="Folder Row">
    <FolderRow
      metaText={text('Meta', '100 items')}
      actions={actions}
      name={text('Name', 'Folder name')}
      open={boolean('Open', true)}
      showToggle={boolean('Show toggle', true)}
    >
      <p>Folder contents</p>
    </FolderRow>
  </StoryItem>
));
