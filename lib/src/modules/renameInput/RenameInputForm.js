import React, { useState, useRef, useEffect } from 'react';

export function RenameInputForm({
  stopEditing,
  onRename,
  label,
  text,
  id,
  multiline,
  classes
}) {
  const [value, setValue] = useState(text);
  const [style, setStyle] = useState(null);
  const widthGetterRef = useRef(null);

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
    if (isEscKey) {
      stopEditing();
    }
  };

  useEffect(() => {
    if (widthGetterRef.current) {
      const { width, height } = widthGetterRef.current.getBoundingClientRect();
      setStyle({
        width,
        height: multiline ? height : 'auto'
      });
    }
  }, [value]);

  const InputType = multiline ? 'textarea' : 'input';

  return (
    <form onSubmit={handleSubmit} className="rename-input inline">
      <label htmlFor={id} className="hidden">
        {label}
      </label>
      <div
        className={`absolute invisible w-auto whitespace-pre-wrap max-w-full mr-5 ${classes}`}
        aria-hidden="true"
        ref={widthGetterRef}
      >
        {value}
      </div>
      <InputType
        value={value}
        onChange={handleOnChange}
        autoFocus
        onKeyDown={handleEsc}
        id={id}
        onBlur={stopEditing}
        className={classes}
        style={style}
        type
      />
    </form>
  );
}
