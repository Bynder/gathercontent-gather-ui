import React from "react";

export function Body({ children, className, ...rest }: any) {
  return (
    <div
      className={`layout-body ql-scroll-container relative w-full flex flex-col flex-1 min-h-0 overflow-y-auto container ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

Body.defaultProps = {
  className: "",
};
