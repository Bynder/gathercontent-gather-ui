import React from 'react';
import { func, string, bool } from 'prop-types';
import { EditableTextWrapper } from 'lib';

function HierarchyNameInput({
  name,
  onChange,
  onStartEditing,
  onStopEditing,
  useLink,
}) {
  return (
    <EditableTextWrapper
      value={name}
      className="h-margin-clear"
      onChange={onChange}
      onStartEditing={onStartEditing}
      onStopEditing={onStopEditing}
      inputLabel="Item name"
    >
      {useLink ? <a href="#test">{name}</a> : name}
    </EditableTextWrapper>
  );
}

HierarchyNameInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  onStartEditing: func.isRequired,
  onStopEditing: func.isRequired,
  useLink: bool,
};

HierarchyNameInput.defaultProps = {
  useLink: false,
};

export { HierarchyNameInput };
