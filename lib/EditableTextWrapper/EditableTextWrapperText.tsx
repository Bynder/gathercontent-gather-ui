import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Button, Icon } from 'lib';

export function EditableTextWrapperText({
  startEditing,
  title,
  buttonLabel,
  className,
  pencilEditOnly,
  children
}: any) {
  const handleEditKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      startEditing();
    }
  };

  const handleEditStart = (event: any) => {
    event.stopPropagation();
    startEditing();
  };

  return (
    <div className={`editable-text__wrapper ${className}`}>
      <span
        className="editable-text__text"
        onClick={pencilEditOnly ? null : startEditing}
        tabIndex={0}
        // @ts-expect-error TS(2322): Type '((event: any) => void) | null' is not assign... Remove this comment to see the full error message
        onKeyUp={pencilEditOnly ? null : handleEditKeyPress}
        role="button"
      >
        {children}
      </span>
      <Button
        types={['icon-only']}
        className="editable-text__button"
        clickHandler={(e: any) => handleEditStart(e)}
        title={title}
      >
        {buttonLabel && <span className="visually-hidden">{buttonLabel}</span>}
        <Icon name="pencil" />
      </Button>
    </div>
  );
}
