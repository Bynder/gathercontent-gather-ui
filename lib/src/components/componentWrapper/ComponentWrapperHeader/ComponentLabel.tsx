import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { RenameInput } from 'lib';

export function ComponentLabel({
  editable,
  label,
  onChange,
  onEmpty,
  maxLength
}: any) {
  if (editable) {
    return (
      <RenameInput
        className="component-label-text"
        text={label}
        label={`edit component label: ${label}`}
        multiline
        onRename={onChange}
        onEmpty={onEmpty}
        size={RenameInput.sizes.lrg}
        maxLength={maxLength}
      />
    );
  }

  return <div className="component-label-text">{label}</div>;
}
