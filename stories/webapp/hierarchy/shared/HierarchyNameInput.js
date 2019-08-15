import React from 'react';
import { func, string } from 'prop-types';
import EditableTextWrapper from '../../../../lib/EditableTextWrapper';

function HierarchyNameInput({ name, onChange }) {
  return (
    <EditableTextWrapper
      value={name}
      className="h-margin-clear"
      onChange={onChange}
    >
      {name}
    </EditableTextWrapper>
  );
}

HierarchyNameInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired
};

export { HierarchyNameInput };
