import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { Icon } from 'lib';
import { HierarchyRowForm } from '../HierarchyRowForm';
import { HierarchyFolderRow } from '../HierarchyFolderRow';

const NewHierarchyFolderRow = ({ id, removeFolder }) => {
  const [folderName, setFolderName] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  const onChange = (value) => {
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
        id={id}
        childCount={0}
        name={folderName}
        nameForm={
          !hasSaved && (
            <HierarchyRowForm
              onSubmit={submitForm}
              onBlur={submitForm}
              onCancel={removeFolder}
              onChange={onChange}
            />
          )
        }
        childIds={[]}
        open
      >
        {(showNewFolder, setShowNewFolderForNewFolder) =>
          showNewFolder && (
            <NewHierarchyFolderRow
              id={`${id}-new-folder`}
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
  id: string.isRequired,
  removeFolder: func.isRequired,
};

export { NewHierarchyFolderRow };
