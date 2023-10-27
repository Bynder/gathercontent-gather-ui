import * as React from "react";

export function InputHelper({ children, className = "", ...rest }: any) {
  return (
    <div className={`gui-input-helper ${className}`} {...rest}>
      {children}
    </div>
  );
}
