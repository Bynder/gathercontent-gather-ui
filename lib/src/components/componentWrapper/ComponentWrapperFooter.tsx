import React from "react";
import cx from "classnames";
import { componentStatuses } from "./ComponentWrapper";

export function ComponentWrapperFooter({
  children,
  editable,
  isSelected,
  draggedOver,
  isHovered,
  className,
  status,
  ...rest
}: any) {
  const classes = cx("gui-component-footer", className, {
    "gui-component-footer-editable": editable,
    "gui-component-footer-dragged-over": draggedOver,
    "gui-component-footer-selected": isSelected,
    "gui-component-footer-hovered": isHovered,
    "border-l-2 border-r-2 border-t-0 border-b-2 border-2 border-green-primary bg-white":
      status === componentStatuses.added,
    "border-l-2 border-r-2 border-t-0 border-b-2  border-red-primary bg-white":
      status === componentStatuses.deleted,
    "border-l-2 border-r-2 border-t-0 border-b-2  border-purple-primary bg-white":
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

ComponentWrapperFooter.defaultProps = {
  editable: false,
  isSelected: false,
  isHovered: false,
  className: "",
};
