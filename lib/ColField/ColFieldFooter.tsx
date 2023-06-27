import React, { HTMLAttributes } from "react";
import { propTypes, defaultProps } from "./common";

function ColFieldFooter({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`col-field__footer border-0 border-t border-solid border-neutral-90 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

ColFieldFooter.propTypes = propTypes;

ColFieldFooter.defaultProps = defaultProps;

export default ColFieldFooter;
