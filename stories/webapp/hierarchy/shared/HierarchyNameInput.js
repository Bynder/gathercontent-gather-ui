import React from 'react';
import { func, string } from 'prop-types';
import { EditableTextWrapper } from 'lib';

function HierarchyNameInput({ name, onChange, onStartEditing, onStopEditing }) {
  return (
    <EditableTextWrapper
      value={name}
      className="h-margin-clear"
      onChange={onChange}
      onStartEditing={onStartEditing}
      onStopEditing={onStopEditing}
    >
      {name}
    </EditableTextWrapper>
  );
}

HierarchyNameInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  onStartEditing: func.isRequired,
  onStopEditing: func.isRequired
};

export { HierarchyNameInput };
