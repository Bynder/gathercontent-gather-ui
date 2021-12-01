import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { Icon, ItemRow } from 'lib';
import { HierarchyRowForm } from '../HierarchyRowForm';
import { HierarchyItemRow } from './HierarchyItemRow';

const NewHierarchyItemRow = ({ id, removeItem }) => {
  const [itemName, setItemName] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  const onChange = (value) => {
    setItemName(value);
  };

  const submitForm = async () => {
    setIsSaving(true);
    await setTimeout(() => {
      setIsSaving(false);
      setHasSaved(true);
      setIsEditing(false);
    }, 1000);
  };

  return (
    <>
      <HierarchyItemRow
        id={id}
        name={itemName}
        status={hasSaved && { color: 'green' }}
        nameForm={
          isEditing ? (
            <ItemRow.Name>
              <HierarchyRowForm
                onSubmit={submitForm}
                onBlur={submitForm}
                onChange={onChange}
                onCancel={removeItem}
              />
            </ItemRow.Name>
          ) : null
        }
      />
      {isSaving && <Icon name="loader" />}
    </>
  );
};

NewHierarchyItemRow.propTypes = {
  id: string.isRequired,
  removeItem: func.isRequired,
};

export { NewHierarchyItemRow };
