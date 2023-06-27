import React, { useState } from 'react';
import { EditableTextWrapperText } from './EditableTextWrapperText';
import { EditableTextWrapperInput } from './EditableTextWrapperInput';

export function EditableTextWrapper({
  children,
  value,
  onChange,
  onStartEditing,
  onStopEditing,
  title,
  className,
  multiline,
  placeholder,
  pencilEditOnly,
  inputLabel,
  inputClassNames,
  maxLength,
  buttonLabel
}) {
  const [editing, setEditing] = useState(false);

  const startEditing = () => {
    setEditing(true);
    onStartEditing();
  };

  const stopEditing = () => {
    setEditing(false);
    onStopEditing();
  };

  if (!editing) {
    return (
      <EditableTextWrapperText
        startEditing={startEditing}
        title={title}
        buttonLabel={buttonLabel}
        className={className}
        pencilEditOnly={pencilEditOnly}
      >
        {children}
      </EditableTextWrapperText>
    );
  }

  return (
    <EditableTextWrapperInput
      multiline={multiline}
      className={className}
      inputLabel={inputLabel}
      placeholder={placeholder}
      inputClassNames={inputClassNames}
      stopEditing={stopEditing}
      value={value}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
}

EditableTextWrapper.defaultProps = {
  title: '',
  className: '',
  multiline: false,
  pencilEditOnly: false,
  placeholder: 'Enter a value',
  onStopEditing: () => {},
  onStartEditing: () => {},
  buttonLabel: '',
  inputClassNames: '',
  maxLength: null
};
