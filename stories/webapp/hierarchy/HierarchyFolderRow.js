import React, { useState, useContext, useMemo } from 'react';
import { arrayOf, string, node, func, bool } from 'prop-types';
import uuid from 'uuid/v4';
import { FolderRow, Windowing, useObjectSelector } from 'lib';
import cx from 'classnames';
import { HierarchyFolderRowActions } from './FolderRow/HierarchyFolderRowActions';
import { HierarchyNameInput } from './shared/HierarchyNameInput';

function HierarchyFolderRow({
  id,
  name,
  open,
  onNewItem,
  childIds,
  addIds,
  removeIds,
}) {
  const [folderName, setFolderName] = useState(name);
  const { allWindowingIds } = useContext(Windowing.Context);

  const {
    isSelected,
    isDisabled,
    handleClick,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  } = useObjectSelector(
    id,
    'folder',
    [id, ...childIds],
    (currentSelectedType, isParentSelected) =>
      currentSelectedType &&
      currentSelectedType !== 'folder' &&
      !isParentSelected
  );
  const [isEditing, setIsEditing] = useState(false);

  const classNames = cx('h-margin-bottom-half folder-row__inner', {
    'is-selected': isSelected,
    'is-disabled': isDisabled,
    'is-hovered': isHovered,
  });

  const folderRowNameClass = cx(
    {
      'h-width-100': isEditing,
    },
    'folder-row__name'
  );

  return useMemo(
    () => (
      <FolderRow open={open}>
        {(show, setShow) => (
          <>
            <FolderRow.Inner
              className={classNames}
              style={{ minWidth: '320px' }}
            >
              <div
                className="folder-row__backdrop"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="h-button-clear"
                  onClick={handleClick}
                />
              </div>
              <FolderRow.Name
                setShow={setShow}
                show={show}
                showToggle
                className={folderRowNameClass}
                handleOnClick={
                  show
                    ? () =>
                        removeIds(
                          allWindowingIds.indexOf(id) + 1,
                          childIds.length
                        )
                    : () => addIds(childIds, allWindowingIds.indexOf(id) + 1)
                }
              >
                <HierarchyNameInput
                  name={folderName}
                  onChange={(value) => setFolderName(value)}
                  onStartEditing={() => {
                    setIsEditing(true);
                  }}
                  onStopEditing={() => {
                    setIsEditing(false);
                  }}
                />
              </FolderRow.Name>

              <FolderRow.Aside>
                <FolderRow.Cell>
                  <HierarchyFolderRowActions
                    startCreatingItem={() => {
                      onNewItem(id);
                      addIds([uuid()], allWindowingIds.indexOf(id) + 1);
                    }}
                  />
                </FolderRow.Cell>
                <FolderRow.Cell
                  meta
                >{`${childIds.length} items`}</FolderRow.Cell>
              </FolderRow.Aside>
            </FolderRow.Inner>
          </>
        )}
      </FolderRow>
    ),
    [isSelected, isHovered, isDisabled, isEditing]
  );
}

HierarchyFolderRow.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  open: bool,
  onNewItem: func,
  childIds: arrayOf(node),
  addIds: func.isRequired,
  removeIds: func.isRequired,
};

HierarchyFolderRow.defaultProps = {
  open: true,
  onNewItem: () => {},
  childIds: [],
};

export { HierarchyFolderRow };
