import React, { useState } from 'react';
import cx from 'classnames';
import uuid from 'uuid/v1';
import { RenameInputForm } from './RenameInputForm';
import { sizes } from './common';

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
  maxLength
}) {
  const [isEditing, setIsEditing] = useState(false);

  const classes = cx(`rename-input-text ${className}`, {
    'rename-input-text-md': size === sizes.md,
    'rename-input-text-lrg': size === sizes.lrg,
    'rename-input-multiline': multiline
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
  placeholder: 'Enter a new value',
  className: '',
  formClass: '',
  id: `rename-input-${uuid()}`,
  maxLength: null
};

RenameInput.sizes = sizes;
