import React, { useEffect, useState } from 'react';
import { arrayOf, string, node, func, bool } from 'prop-types';
import { FolderRow } from 'lib';
import cx from 'classnames';
import { HierarchyFolderRowActions } from './FolderRow/HierarchyFolderRowActions';
import { HierarchyNameInput } from './shared/HierarchyNameInput';
import { useObjectSelector } from '../../../lib/SelectionProvider/useObjectSelector';

function HierarchyFolderRow({ id, name, open }) {
  const [folderName, setFolderName] = useState(name);

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
    [id, []], //TO FIX
    (currentSelectedType, isParentSelected) =>
      currentSelectedType &&
      currentSelectedType !== 'folder' &&
      !isParentSelected
  );

  const classNames = cx('h-margin-bottom-half folder-row__inner', {
    'is-selected': isSelected,
    'is-disabled': isDisabled,
    'is-hovered': isHovered,
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
              <HierarchyNameInput
                name={folderName}
                onChange={value => setFolderName(value)}
              />
            </FolderRow.Name>

            <FolderRow.Aside>
              <FolderRow.Cell>
                <HierarchyFolderRowActions
                  startCreatingFolder={() => setNewFolderId(`${id}-new-folder`)}
                  startCreatingItem={() => setNewItemId(`${id}-new-item`)}
                />
              </FolderRow.Cell>
              <FolderRow.Cell meta>{`${0} items`}</FolderRow.Cell> {/*TO FIX*/}
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
  open: bool
};

HierarchyFolderRow.defaultProps = {
  open: true
};

export { HierarchyFolderRow };
