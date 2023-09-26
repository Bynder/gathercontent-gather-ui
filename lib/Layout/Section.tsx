import React from "react";

export function Section({ children, className, ...rest }: any) {
  return (
    <div className={`layout-section ${className}`} {...rest}>
      {children}
    </div>
  );
}

Section.defaultProps = {
  className: "",
};
