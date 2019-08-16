import React, { useEffect, useState, useContext } from 'react';
import { arrayOf, shape, node, func, bool } from 'prop-types';
import { FolderRow, SelectedObjectsContext } from 'lib';
import cx from 'classnames';
import { HierarchyFolderRowActions } from './FolderRow/HierarchyFolderRowActions';
import { HierarchyNameInput } from './shared/HierarchyNameInput';

function HierarchyFolderRow({
  parentData,
  childIds,
  nameForm,
  children,
  open
}) {
  const [folderName, setFolderName] = useState(parentData.name);
  const [newFolderId, setNewFolderId] = useState(false);

  const {
    selected,
    selectMultiple,
    deselectMultiple,
    currentSelectedType
  } = useContext(SelectedObjectsContext);

  const isLevelSelected = selected.indexOf(parentData.id) !== -1;
  const isDisabled =
    currentSelectedType && currentSelectedType !== 'folder' && !isLevelSelected;

  const classNames = cx('h-margin-bottom-half', {
    'is-selected': isLevelSelected,
    'is-disabled': isDisabled
  });

  useEffect(() => {
    setFolderName(parentData.name);
  }, [parentData.name]);

  return (
    <FolderRow
      className={classNames}
      metaText={`${childIds.length} items`}
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
          startCreatingFolder={() =>
            setNewFolderId(`${parentData.id}-new-folder`)
          }
        />
      }
      style={{ minWidth: '320px' }}
      open={open}
      showToggle
      onClick={() => {
        if (!isDisabled) {
          return isLevelSelected
            ? deselectMultiple([parentData.id, ...childIds], 'folder')
            : selectMultiple([parentData.id, ...childIds], 'folder');
        }
        return null;
      }}
    >
      {children(newFolderId, setNewFolderId)}
    </FolderRow>
  );
}

HierarchyFolderRow.propTypes = {
  parentData: shape({}).isRequired,
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
