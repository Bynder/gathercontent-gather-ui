import React from "react";
import cx from "classnames";
import { componentStatuses } from "./ComponentWrapper";

export function ComponentWrapperBody({
  children,
  editable,
  isSelected,
  isHovered,
  draggedOver,
  status,
  className,
  ...rest
}: any) {
  const classes = cx(`gui-component-body ${className}`, {
    "gui-component-body-editable": editable,
    "gui-component-body-dragged-over": draggedOver,
    "gui-component-body-selected": isSelected,
    "gui-component-body-hovered": isHovered,
    "border-l-2 border-r-2 border-t-0 border-b-0 border-2 border-green-primary bg-white":
      status === componentStatuses.added,
    "border-l-2 border-r-2 border-t-0 border-b-0  border-red-primary bg-white":
      status === componentStatuses.deleted,
    "border-l-2 border-r-2 border-t-0 border-b-0  border-purple-primary bg-white":
      status === componentStatuses.movedDown ||
      status === componentStatuses.movedUp,
    "bg-white": [
      componentStatuses.active,
      componentStatuses.unchanged,
    ].includes(status),
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

ComponentWrapperBody.defaultProps = {
  editable: false,
  isSelected: false,
  draggedOver: false,
  className: "",
};
