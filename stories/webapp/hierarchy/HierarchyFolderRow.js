import React, { useState, useContext } from 'react';
import { arrayOf, string, node, func, bool } from 'prop-types';
import uuid from 'uuid/v4';
import { FolderRow, Windowing, useObjectSelector } from 'lib';
import cx from 'classnames';
import { HierarchyFolderRowActions } from './FolderRow/HierarchyFolderRowActions';
import { HierarchyNameInput } from './shared/HierarchyNameInput';

function HierarchyFolderRow({ id, name, open, onNewItem, childIds }) {
  const [folderName, setFolderName] = useState(name);

  const { addIds, allWindowingIds, removeIds } = useContext(Windowing.Context);

  const {
    isSelected,
    isDisabled,
    handleClick,
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  } = useObjectSelector(
    id,
    'folder',
    [id, ...childIds],
    (currentSelectedType, isParentSelected) =>
      currentSelectedType &&
      currentSelectedType !== 'folder' &&
      !isParentSelected
  );

  const classNames = cx('h-margin-bottom-half folder-row__inner', {
    'is-selected': isSelected,
    'is-disabled': isDisabled,
    'is-hovered': isHovered
  });

  return (
    <FolderRow open={open}>
      {(show, setShow) => (
        <>
          <FolderRow.Inner className={classNames} style={{ minWidth: '320px' }}>
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
                onChange={value => setFolderName(value)}
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
              <FolderRow.Cell meta>{`${childIds.length} items`}</FolderRow.Cell>
            </FolderRow.Aside>
          </FolderRow.Inner>
        </>
      )}
    </FolderRow>
  );
}

HierarchyFolderRow.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  open: bool,
  onNewItem: func,
  childIds: arrayOf(node)
};

HierarchyFolderRow.defaultProps = {
  open: true,
  onNewItem: () => {},
  childIds: []
};

export { HierarchyFolderRow };
