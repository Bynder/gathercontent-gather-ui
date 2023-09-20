import React from "react";
import { defaultProps } from "./common";

function SelectionModalColumnHeader({ children, className, ...rest }: any) {
  return (
    <h4
      className={`text-xs weight-semi-bold text-neutral-primary ${className}`}
      {...rest}
    >
      {children}
    </h4>
  );
}

SelectionModalColumnHeader.defaultProps = defaultProps;

export default SelectionModalColumnHeader;
