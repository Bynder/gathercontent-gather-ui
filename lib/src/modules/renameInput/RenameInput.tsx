import React, { useState } from "react";
import cx from "classnames";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import uuid from "uuid/v1";
import { RenameInputForm } from "./RenameInputForm";
import { sizes } from "./common";

export function RenameInput({
  text,
  title,
  label,
  onRename,
  onEmpty,
  id,
  multiline,
  size,
  className,
  placeholder,
  formClass,
  maxLength,
}: any) {
  const [isEditing, setIsEditing] = useState(false);

  const classes = cx(`gui-rename-input-text ${className}`, {
    "gui-rename-input-text-md": size === sizes.md,
    "gui-rename-input-text-lrg": size === sizes.lrg,
    "gui-rename-input-multiline": multiline,
  });

  if (isEditing) {
    return (
      <RenameInputForm
        stopEditing={() => setIsEditing(false)}
        onRename={onRename}
        onEmpty={onEmpty}
        label={label}
        id={id}
        text={text}
        multiline={multiline}
        classes={classes}
        title={title}
        placeholder={placeholder}
        formClass={formClass}
        maxLength={maxLength}
      />
    );
  }

  return (
    <button
      className={`${classes} rename-input`}
      onClick={() => setIsEditing(true)}
      type="button"
    >
      {text}
    </button>
  );
}

RenameInput.defaultProps = {
  size: sizes.md,
  placeholder: "Enter a new value",
  className: "",
  formClass: "",
  id: `rename-input-${uuid()}`,
  maxLength: null,
};

RenameInput.sizes = sizes;
