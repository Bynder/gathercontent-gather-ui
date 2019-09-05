import React, { useEffect, useState } from 'react';
import { arrayOf, string, node, func, bool } from 'prop-types';
import { FolderRow } from 'lib';
import cx from 'classnames';
import { HierarchyFolderRowActions } from './FolderRow/HierarchyFolderRowActions';
import { HierarchyNameInput } from './shared/HierarchyNameInput';
import { useObjectSelector } from '../../../lib/SelectionProvider/useObjectSelector';

function HierarchyFolderRow({ id, name, childIds, nameForm, children, open }) {
  const [folderName, setFolderName] = useState(name);
  const [newFolderId, setNewFolderId] = useState(false);

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

  const classNames = cx('h-margin-bottom-half', {
    'is-selected': isSelected,
    'is-disabled': isDisabled,
    'is-hovered': isHovered
  });

  useEffect(() => {
    setFolderName(name);
  }, [name]);

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
            <FolderRow.Name setShow={setShow} show={show} showToggle>
              {nameForm || (
                <HierarchyNameInput
                  name={folderName}
                  onChange={value => setFolderName(value)}
                />
              )}
            </FolderRow.Name>

            <FolderRow.Aside>
              <FolderRow.Cell>
                <HierarchyFolderRowActions
                  startCreatingFolder={() => setNewFolderId(`${id}-new-folder`)}
                />
              </FolderRow.Cell>

              <FolderRow.Cell meta>{`${childIds.length} items`}</FolderRow.Cell>
            </FolderRow.Aside>
          </FolderRow.Inner>

          <FolderRow.Contents>
            {children(newFolderId, setNewFolderId)}
          </FolderRow.Contents>
        </>
      )}
    </FolderRow>
  );
}

HierarchyFolderRow.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  childIds: arrayOf(node).isRequired,
  children: func.isRequired,
  nameForm: node,
  open: bool
};

HierarchyFolderRow.defaultProps = {
  nameForm: null,
  open: true
};

export { HierarchyFolderRow };
