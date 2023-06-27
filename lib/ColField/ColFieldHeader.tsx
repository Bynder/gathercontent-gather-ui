import React, { HTMLAttributes } from "react";
import cx from "classnames";
import { propTypes, defaultProps } from "./common";

interface Props extends HTMLAttributes<HTMLDivElement> {
  border?: boolean;
}

function ColFieldHeader({ children, className, border, ...props }: Props) {
  const classes = cx(`col-field__header border-0 py-4 px-5  ${className}`, {
    "border-b border-solid border-neutral-90": border,
  });
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

ColFieldHeader.defaultProps = {
  ...defaultProps,
  border: true,
};

export default ColFieldHeader;
