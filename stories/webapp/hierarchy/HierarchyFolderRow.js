import React, { useEffect, useState } from 'react';
import { FolderRow } from '../../../lib';
import { HierarchyFolderRowActions } from './FolderRow/HierarchyFolderRowActions';
import { HierarchyNameInput } from './shared/HierarchyNameInput';

function HierarchyFolderRow({ name, nameForm, childCount, children, open }) {
  const [folderName, setFolderName] = useState(name);
  const [showNewFolder, setShowNewFolder] = useState(false);

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
          startCreatingFolder={() => setShowNewFolder(true)}
        />
      }
      style={{ minWidth: '320px' }}
      open={open}
      showToggle
    >
      {children(showNewFolder, setShowNewFolder)}
    </FolderRow>
  );
}

HierarchyFolderRow.propTypes = FolderRow.propTypes;

HierarchyFolderRow.defaultProps = FolderRow.defaultProps;

export { HierarchyFolderRow };
