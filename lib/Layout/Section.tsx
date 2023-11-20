import React from "react";

export function Section({ children, className, ...rest }: any) {
  return (
    <div className={`gui-layout-section ${className}`} {...rest}>
      {children}
    </div>
  );
}

Section.defaultProps = {
  className: "",
};
