import React, { HTMLAttributes } from "react";
import { useSpring, animated } from "react-spring";
import cx from "classnames";
import { defaultProps } from "./common";
import ColFieldHeader from "./ColFieldHeader";
import ColFieldLabel from "./ColFieldLabel";
import ColFieldBody from "./ColFieldBody";
import ColFieldFooter from "./ColFieldFooter";
import ColFieldInstructions from "./ColFieldInstructions";

const statuses = {
  active: "ACTIVE",
  added: "ADDED",
  deleted: "DELETED",
  movedUp: "MOVED_UP",
  movedDown: "MOVED_DOWN",
  unchanged: "UNCHANGED",
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
  status?:
    | "ACTIVE"
    | "ADDED"
    | "DELETED"
    | "MOVED_UP"
    | "MOVED_DOWN"
    | "UNCHANGED";
  isSelected?: boolean;
  isHovered?: boolean;
}

export function ColField({
  children,
  className,
  visible,
  style,
  status,
  isSelected,
  isHovered,
  ...props
}: Props) {
  const animatedStyle = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 100 },
  });

  const classes = cx(`col-field border-solid rounded relative ${className}`, {
    "bg-white border shadow": status === statuses.active,
    "border-neutral-90":
      (status === statuses.active || status === statuses.unchanged) &&
      !isHovered,
    "bg-neutral-98 border hover:bg-white hover:shadow":
      status === statuses.unchanged,
    "border-2 border-green-primary bg-white": status === statuses.added,
    "border-2 border-red-primary bg-white": status === statuses.deleted,
    "border-2 border-purple-primary bg-white":
      status === statuses.movedDown || status === statuses.movedUp,
    "col-field-selected": isSelected,
    "border-blue-primary": isHovered,
  });

  return (
    <animated.div
      className={classes}
      style={{
        ...animatedStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </animated.div>
  );
}

ColField.defaultProps = {
  ...defaultProps,
  style: {},
  visible: true,
  status: statuses.active,
  isSelected: false,
};

ColField.Header = ColFieldHeader;
ColField.Label = ColFieldLabel;
ColField.Body = ColFieldBody;
ColField.Footer = ColFieldFooter;
ColField.Instructions = ColFieldInstructions;
ColField.statuses = statuses;

export default ColField;
