import React, { useState, useEffect } from "react";
import cx from "classnames";
import { ExpandingTextArea } from "lib";

export function EditableTextWrapperInput({
  multiline,
  className,
  inputLabel,
  placeholder,
  inputClassNames,
  stopEditing,
  onChange,
  value,
  maxLength,
}: any) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (inputValue !== value) {
      setInputValue(value);
    }
  }, [value]);

  const classes = cx(
    "gui-editable-text__wrapper",
    "gui-editable-text__wrapper--editing",
    className,
    `${className}--editing`
  );

  const handleOnKeyDown = (e: any) => {
    const isEscKey = e.keyCode === 27;
    const isReturnKey = e.keyCode === 13;

    if (isReturnKey) {
      onChange(inputValue);
      stopEditing();
    }

    if (isEscKey) {
      setInputValue(value);
      stopEditing();
    }
  };

  const handleOnBlur = () => {
    onChange(inputValue);
    stopEditing();
  };

  if (multiline) {
    return (
      <div className={classes}>
        <label
          htmlFor="editable-text-wrapper-input"
          className="gui-visually-hidden"
        >
          {inputLabel}
        </label>
        <ExpandingTextArea
          placeholder={placeholder}
          className={`gui-editable-text__input ${inputClassNames}`}
          value={inputValue}
          handleOnChange={(e: any) => setInputValue(e.target.value)}
          onKeyDown={handleOnKeyDown}
          handleOnFocus={(e: any) => e.target.select()}
          handleOnBlur={handleOnBlur}
          focusOnMount
          id="editable-text-wrapper-input"
          maxLength={maxLength}
        />
      </div>
    );
  }

  return (
    <div className={classes}>
      <label
        htmlFor="editable-text-wrapper-input"
        className="gui-visually-hidden"
      >
        {inputLabel}
      </label>
      <input
        placeholder={placeholder}
        className={`gui-editable-text__input gui-single-line ${inputClassNames}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleOnKeyDown}
        onFocus={(e) => e.target.select()}
        onBlur={handleOnBlur}
        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        id="editable-text-wrapper-input"
        maxLength={maxLength}
      />
    </div>
  );
}
