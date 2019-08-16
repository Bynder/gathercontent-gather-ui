import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { FolderRow, TooltipWrapper, Icon, Button } from '../../index';

const actions = (
  <>
    <FolderRow.Action>
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
    </FolderRow.Action>
    <FolderRow.Action>
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
    </FolderRow.Action>
  </>
);

storiesOf('Components', module).add('Folder Row', () => {
  const open = boolean('Open', true);

  return (
    <StoryItem title="Folder Row">
      <FolderRow open={open}>
        {show => (
          <>
            <FolderRow.Inner>
              <FolderRow.Name showToggle={boolean('Show toggle', true)}>
                <p className="h-margin-clear">{text('Name', 'Folder name')}</p>
              </FolderRow.Name>

              <FolderRow.Aside>
                <FolderRow.Cell>{actions}</FolderRow.Cell>

                <FolderRow.Cell meta>
                  {text('Meta', '100 items')}
                </FolderRow.Cell>
              </FolderRow.Aside>
            </FolderRow.Inner>

            <FolderRow.Contents
              highlight={boolean('Highlight contents', true)}
              show={show}
            >
              <p>Folder contents</p>
            </FolderRow.Contents>
          </>
        )}
      </FolderRow>
    </StoryItem>
  );
});
