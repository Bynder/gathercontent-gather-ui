import React, { useEffect, useState } from 'react';
import { FolderRow } from '../../../lib';
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

  useEffect(() => {
    setFolderName(name);
  }, [name]);

  return (
    <FolderRow
      className="h-margin-bottom-half"
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
    >
      {children(newFolderId, setNewFolderId)}
    </FolderRow>
  );
}

HierarchyFolderRow.propTypes = FolderRow.propTypes;

HierarchyFolderRow.defaultProps = FolderRow.defaultProps;

export { HierarchyFolderRow };
