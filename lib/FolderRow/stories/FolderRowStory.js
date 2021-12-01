import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import cx from 'classnames';
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

export default {
  title: 'Components',
};

export const _FolderRow = () => {
  const open = boolean('Open', true);
  const draggedOver = boolean('Dragged over', false);

  const classNameInner = cx('folder-row__inner', {
    'folder-row__inner-dragged-insert': draggedOver,
  });

  const classNameLine = cx('hierarchy-line', {
    'dragged-insert': draggedOver,
  });

  return (
    <StoryItem title="Folder Row">
      <FolderRow open={open}>
        {() => (
          <>
            <FolderRow.Inner className={classNameInner}>
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
              style={{ position: 'relative', height: '150px' }}
            >
              <span
                className={classNameLine}
                style={{
                  top: '0',
                  left: '20px',
                  height: '100px',
                }}
              />
            </FolderRow.Contents>
          </>
        )}
      </FolderRow>
    </StoryItem>
  );
};
