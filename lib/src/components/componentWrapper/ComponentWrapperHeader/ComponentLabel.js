import React from 'react';
import EditableTextWrapper from 'lib/EditableTextWrapper';

export function ComponentLabel({ editable, label, onChange }) {
  if (editable) {
    return (
      <EditableTextWrapper
        className="component-label-text"
        value={label}
        onChange={onChange}
        multiline
        inputLabel={`edit component label: ${label}`}
        inputClassNames="component-label-text-input"
      >
        {label}
      </EditableTextWrapper>
    );
  }

  return <div className="component-label-text">{label}</div>;
}
