import React from 'react';
import { Button, Icon } from 'lib';

export function EditableTextWrapperText({
  startEditing,
  title,
  buttonLabel,
  className,
  pencilEditOnly,
  children
}) {
  const handleEditKeyPress = event => {
    if (event.key === 'Enter') {
      startEditing();
    }
  };

  const handleEditStart = event => {
    event.stopPropagation();
    startEditing();
  };

  return (
    <div className={`editable-text__wrapper ${className}`}>
      <span
        className="editable-text__text"
        onClick={pencilEditOnly ? null : startEditing}
        tabIndex={0}
        onKeyUp={pencilEditOnly ? null : handleEditKeyPress}
        role="button"
      >
        {children}
      </span>
      <Button
        types={['icon-only']}
        className="editable-text__button"
        clickHandler={e => handleEditStart(e)}
        title={title}
      >
        {buttonLabel && <span className="visually-hidden">{buttonLabel}</span>}
        <Icon name="pencil" />
      </Button>
    </div>
  );
}
