import React from "react";
import { Divider } from "./Divider";

function Toolbar({ children, className, ...rest }: any) {
  return (
    <div
      className={`flex items-center border-0 border-b border-solid border-neutral-90 px-4 bg-white ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

Toolbar.defaultProps = {
  className: "",
};

Toolbar.Divider = Divider;

export { Toolbar };
