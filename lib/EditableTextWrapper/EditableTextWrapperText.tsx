import React from "react";
import { Button, Icon } from "lib";

export function EditableTextWrapperText({
  startEditing,
  title,
  buttonLabel,
  className,
  pencilEditOnly,
  children,
}: any) {
  const handleEditKeyPress = (event: any) => {
    if (event.key === "Enter") {
      startEditing();
    }
  };

  const handleEditStart = (event: any) => {
    event.stopPropagation();
    startEditing();
  };

  return (
    <div className={`gui-editable-text__wrapper ${className}`}>
      <span
        className="gui-editable-text__text"
        onClick={pencilEditOnly ? null : startEditing}
        tabIndex={0}
        // @ts-expect-error TS(2322): Type '((event: any) => void) | null' is not assign... Remove this comment to see the full error message
        onKeyUp={pencilEditOnly ? null : handleEditKeyPress}
        role="button"
      >
        {children}
      </span>
      <Button
        types={["icon-only"]}
        className="gui-editable-text__button"
        clickHandler={(e: any) => handleEditStart(e)}
        title={title}
      >
        {buttonLabel && (
          <span className="gui-visually-hidden">{buttonLabel}</span>
        )}
        <Icon name="pencil" />
      </Button>
    </div>
  );
}
