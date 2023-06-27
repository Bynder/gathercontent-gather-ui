import React from 'react';
import cx from 'classnames';
import StoryItem from '../../../stories/styleguide/StoryItem';
import {
  FolderRow as FolderRowComponent,
  TooltipWrapper,
  Icon,
  Button
} from '../../index';

const actions = (
  <>
    <FolderRowComponent.Action>
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
    </FolderRowComponent.Action>
    <FolderRowComponent.Action>
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
    </FolderRowComponent.Action>
  </>
);

export default {
  title: 'Legacy/Folder Row',
  component: FolderRowComponent,
  args: {
    open: true,
    draggedOver: false,
    showToggle: true,
    folderName: 'Folder name',
    meta: '100 items'
  }
};

export const FolderRow = ({
  open,
  draggedOver,
  showToggle,
  folderName,
  meta
}) => {
  const classNameInner = cx('folder-row__inner', {
    'folder-row__inner-dragged-insert': draggedOver
  });

  const classNameLine = cx('hierarchy-line', {
    'dragged-insert': draggedOver
  });

  return (
    <StoryItem title="Folder Row">
      <FolderRowComponent open={open}>
        {() => (
          <>
            <FolderRowComponent.Inner className={classNameInner}>
              <FolderRowComponent.Name showToggle={showToggle}>
                <p className="h-margin-clear">{folderName}</p>
              </FolderRowComponent.Name>

              <FolderRowComponent.Aside>
                <FolderRowComponent.Cell>{actions}</FolderRowComponent.Cell>

                <FolderRowComponent.Cell meta>{meta}</FolderRowComponent.Cell>
              </FolderRowComponent.Aside>
            </FolderRowComponent.Inner>

            <FolderRowComponent.Contents
              style={{ position: 'relative', height: '150px' }}
            >
              <span
                className={classNameLine}
                style={{
                  top: '0',
                  left: '20px',
                  height: '100px'
                }}
              />
            </FolderRowComponent.Contents>
          </>
        )}
      </FolderRowComponent>
    </StoryItem>
  );
};
