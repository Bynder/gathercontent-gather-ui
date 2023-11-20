import React, { useState } from "react";

export function RenameInputForm({
  stopEditing,
  onRename,
  onEmpty,
  label,
  text,
  id,
  multiline,
  classes,
  placeholder,
  formClass,
  maxLength,
}: any) {
  const [value, setValue] = useState(text);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value.trim() !== "") {
      onRename(value);
    } else if (onEmpty) {
      onEmpty();
    }
    stopEditing();
  };

  const handleOnChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    const isEscKey = e.keyCode === 27;
    const isEnterKey = e.keyCode === 13;
    if (isEscKey) {
      stopEditing();
    }
    if (isEnterKey) {
      handleSubmit(e);
    }
  };

  const InputType = multiline ? "textarea" : "input";
  return (
    <form
      onSubmit={handleSubmit}
      className={`gui-rename-input-form ${formClass}`}
    >
      <label htmlFor={id} className="hidden">
        {label}
      </label>
      <div
        className={`gui-rename-input-size-helper ${classes}`}
        aria-hidden="true"
      >
        {value || placeholder}
      </div>
      <InputType
        value={value}
        onChange={handleOnChange}
        autoFocus
        onKeyDown={handleKeyDown}
        id={id}
        onBlur={handleSubmit}
        className={`${classes}`}
        placeholder={placeholder}
        onFocus={(e) => e.target.select()}
        maxLength={maxLength}
      />
    </form>
  );
}
