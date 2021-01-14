import React from 'react';
import { RenameInput } from 'lib';

export function ComponentLabel({ editable, label, onChange }) {
  if (editable) {
    return (
      <RenameInput
        className="component-label-text"
        text={label}
        label={`edit component label: ${label}`}
        multiline
        onRename={onChange}
        size={RenameInput.sizes.lrg}
      />
    );
  }

  return <div className="component-label-text">{label}</div>;
}
