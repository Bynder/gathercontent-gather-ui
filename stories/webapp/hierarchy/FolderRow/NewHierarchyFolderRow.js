import React, { useState } from 'react';
import { func } from 'prop-types';
import { Icon } from '../../../../lib';
import { HierarchyFolderRowForm } from './HierarchyFolderRowForm';
import { HierarchyFolderRow } from '../HierarchyFolderRow';

const NewHierarchyFolderRow = ({ removeFolder }) => {
  const [folderName, setFolderName] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  const onChange = value => {
    setFolderName(value);
  };

  const submitForm = async () => {
    setIsSaving(true);
    await setTimeout(() => {
      setIsSaving(false);
      setHasSaved(true);
    }, 1000);
  };

  return (
    <>
      <HierarchyFolderRow
        childCount={0}
        name={folderName}
        nameForm={
          !hasSaved && (
            <HierarchyFolderRowForm
              onSubmit={submitForm}
              onBlur={submitForm}
              onCancel={removeFolder}
              onChange={onChange}
            />
          )
        }
        open
      >
        {(showNewFolder, setShowNewFolderForNewFolder) =>
          showNewFolder && (
            <NewHierarchyFolderRow
              removeFolder={() => setShowNewFolderForNewFolder(false)}
            />
          )
        }
      </HierarchyFolderRow>

      {isSaving && <Icon name="loader" />}
    </>
  );
};

NewHierarchyFolderRow.propTypes = {
  removeFolder: func.isRequired
};

export { NewHierarchyFolderRow };
