import React, { useState } from 'react';

export function RenameInputForm({
  stopEditing,
  onRename,
  label,
  text,
  id,
  multiline,
  classes,
  placeholder,
  formClass
}) {
  const [value, setValue] = useState(text);

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() !== '') {
      onRename(value);
    }
    stopEditing();
  };

  const handleOnChange = e => {
    setValue(e.target.value);
  };

  const handleEsc = e => {
    const isEscKey = e.keyCode === 27;
    const isEnterKey = e.keyCode === 13;
    if (isEscKey) {
      stopEditing();
    }
    if (isEnterKey) {
      handleSubmit(e);
    }
  };

  const InputType = multiline ? 'textarea' : 'input';
  return (
    <form onSubmit={handleSubmit} className={`rename-input-form ${formClass}`}>
      <label htmlFor={id} className="hidden">
        {label}
      </label>
      <div className={`rename-input-size-helper ${classes}`} aria-hidden="true">
        {value || placeholder}
      </div>
      <InputType
        value={value}
        onChange={handleOnChange}
        autoFocus
        onKeyDown={handleEsc}
        id={id}
        onBlur={stopEditing}
        className={`${classes}`}
        type
        placeholder={placeholder}
        onFocus={e => e.target.select()}
      />
    </form>
  );
}
