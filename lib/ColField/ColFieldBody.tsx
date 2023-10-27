import React, { HTMLAttributes } from "react";
import { defaultProps } from "./common";

function ColFieldBody({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`gui-col-field__body ${className}`} {...props}>
      {children}
    </div>
  );
}

ColFieldBody.defaultProps = defaultProps;

export default ColFieldBody;
