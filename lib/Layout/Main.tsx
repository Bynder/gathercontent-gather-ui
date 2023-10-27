import React from "react";

export function Main({ children, className, ...rest }: any) {
  return (
    <main
      className={`gui-layout-main overflow-y-hidden overflow-x-hidden flex flex-1 flex-col relative ${className}`}
      {...rest}
    >
      {children}
    </main>
  );
}

Main.defaultProps = {
  className: "",
};
