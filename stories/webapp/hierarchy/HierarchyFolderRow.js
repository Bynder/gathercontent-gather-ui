import React, { useEffect, useState, useContext } from 'react';
import cx from 'classnames';
import { FolderRow, SelectedObjectsContext } from '../../../lib';
import { HierarchyFolderRowActions } from './FolderRow/HierarchyFolderRowActions';
import { HierarchyNameInput } from './shared/HierarchyNameInput';

function HierarchyFolderRow({
  id,
  name,
  nameForm,
  childCount,
  children,
  open
}) {
  const [folderName, setFolderName] = useState(name);
  const [newFolderId, setNewFolderId] = useState(false);

  const {
    selected,
    selectMultiple,
    deselectMultiple,
    currentSelectedType
  } = useContext(SelectedObjectsContext);

  const childIds = [...Array(childCount).keys()].map(
    child => `child-${child}-${id}`
  );
  const isLevelSelected = selected.indexOf(id) !== -1;
  const isDisabled =
    currentSelectedType && currentSelectedType !== 'folder' && !isLevelSelected;

  const classNames = cx('h-margin-bottom-half', {
    'is-selected': isLevelSelected,
    'is-disabled': isDisabled
  });

  useEffect(() => {
    setFolderName(name);
  }, [name]);

  return (
    <FolderRow
      className={classNames}
      metaText={`${childCount} items`}
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
          startCreatingFolder={() => setNewFolderId(`${id}-new-folder`)}
        />
      }
      style={{ minWidth: '320px' }}
      open={open}
      showToggle
      onClick={() => {
        if (!isDisabled) {
          return isLevelSelected
            ? deselectMultiple([id, ...childIds], 'folder')
            : selectMultiple([id, ...childIds], 'folder');
        }
        return null;
      }}
    >
      {children(newFolderId, setNewFolderId)}
    </FolderRow>
  );
}

HierarchyFolderRow.propTypes = FolderRow.propTypes;

HierarchyFolderRow.defaultProps = FolderRow.defaultProps;

export { HierarchyFolderRow };
