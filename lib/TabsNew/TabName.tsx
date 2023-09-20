import React from "react";

function TabName({ children, className }: any) {
  return (
    <div
      className={`tab-name whitespace-nowrap overflow-hidden w-full ${className}`}
    >
      {children}
    </div>
  );
}

TabName.defaultProps = {
  className: "",
};

export { TabName };
