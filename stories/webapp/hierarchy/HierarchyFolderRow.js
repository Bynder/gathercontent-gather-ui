import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { FolderRow } from '../../../lib';
import { HierarchyFolderRowActions } from './FolderRow/HierarchyFolderRowActions';
import { HierarchyNameInput } from './shared/HierarchyNameInput';
import { useObjectSelector } from '../../../lib/SelectedObjectsProvider/useObjectSelector';

function HierarchyFolderRow({ data, nameForm, children, open }) {
  const [folderName, setFolderName] = useState(data.name);
  const [newFolderId, setNewFolderId] = useState(false);
  const childIds = data.children.map(child => child.id);
  const { isSelected, isDisabled, handleClick } = useObjectSelector(
    data.id,
    'folder',
    [data.id, ...childIds],
    (currentSelectedType, isParentSelected) =>
      currentSelectedType &&
      currentSelectedType !== 'folder' &&
      !isParentSelected
  );

  const classNames = cx('h-margin-bottom-half', {
    'is-selected': isSelected,
    'is-disabled': isDisabled
  });

  useEffect(() => {
    setFolderName(data.name);
  }, [data.name]);

  return (
    <FolderRow
      className={classNames}
      metaText={`${data.children.length} items`}
      name={
        nameForm || (
          <HierarchyNameInput
            name={folderName}
            onChange={value => setFolderName(value)}
          />
        )
      }
      actions={
        <HierarchyFolderRowActions
          startCreatingFolder={() => setNewFolderId(`${data.id}-new-folder`)}
        />
      }
      style={{ minWidth: '320px' }}
      open={open}
      showToggle
      onClick={handleClick}
    >
      {children(newFolderId, setNewFolderId)}
    </FolderRow>
  );
}

HierarchyFolderRow.propTypes = FolderRow.propTypes;

HierarchyFolderRow.defaultProps = FolderRow.defaultProps;

export { HierarchyFolderRow };
