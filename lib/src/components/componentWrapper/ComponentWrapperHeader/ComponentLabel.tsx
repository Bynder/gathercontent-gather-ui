import React from "react";
import { RenameInput } from "lib";

export function ComponentLabel({
  editable,
  label,
  onChange,
  onEmpty,
  maxLength,
}: any) {
  if (editable) {
    return (
      <RenameInput
        className="gui-component-label-text"
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

  return <div className="gui-component-label-text">{label}</div>;
}
